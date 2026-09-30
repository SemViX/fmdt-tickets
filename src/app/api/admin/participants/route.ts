import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization");
  const token = authorization?.match(/^Bearer\s+(.+)$/i)?.[1];
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const allowedEmails = (process.env.ADMIN_EMAILS ?? process.env.ADMIN_EMAIL ?? "").split(",").map((value) => value.trim().toLowerCase()).filter(Boolean);

  if (!url || !publishableKey || !serviceRoleKey || allowedEmails.length === 0) {
    return NextResponse.json({ error: "Сервер не налаштовано для додавання учасників." }, { status: 503 });
  }
  if (!token) return NextResponse.json({ error: "Потрібно увійти в систему." }, { status: 401 });

  const authClient = createClient(url, publishableKey, { auth: { persistSession: false, autoRefreshToken: false } });
  const { data: { user }, error: authError } = await authClient.auth.getUser(token);
  if (authError || !user?.email || !allowedEmails.includes(user.email.toLowerCase())) {
    return NextResponse.json({ error: "Цей обліковий запис не має прав адміністратора." }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Некоректні дані запиту." }, { status: 400 });
  }
  const input = body as { fullName?: unknown; ticketNumber?: unknown };
  const fullName = typeof input.fullName === "string" ? input.fullName.trim().replace(/\s+/g, " ") : "";
  const ticketNumber = typeof input.ticketNumber === "string" ? input.ticketNumber.trim() : "";
  if (!fullName || fullName.length > 120 || !ticketNumber || ticketNumber.length > 50) {
    return NextResponse.json({ error: "Enter a name and a ticket number (up to 50 characters)." }, { status: 400 });
  }

  const adminClient = createClient(url, serviceRoleKey, { auth: { persistSession: false, autoRefreshToken: false } });
  const { error: insertError } = await adminClient.from("participants").insert({ full_name: fullName, ticket_number: ticketNumber });
  if (insertError) {
    if (insertError.code === "23505") return NextResponse.json({ error: "Такий номер квитка вже є у списку." }, { status: 409 });
    console.error("Failed to insert participant:", {
      code: insertError.code,
      message: insertError.message,
      details: insertError.details,
      hint: insertError.hint,
    });
    return NextResponse.json({
      error: `Could not save participant [${insertError.code ?? "DB_ERROR"}]: ${insertError.message}`,
    }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
