"use client";

import { FormEvent, useEffect, useState } from "react";
import { LogOut, Ticket, UserPlus } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminParticipants() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedInEmail, setSignedInEmail] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [busy, setBusy] = useState(false);


  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) setSignedInEmail(data.session?.user.email ?? null);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSignedInEmail(session?.user.email ?? null);
    });
    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) {
      setIsError(true);
      setMessage("Не вдалося увійти. Перевірте email і пароль або зверніться до адміністратора.");
    }
  };

  const addParticipant = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setMessage("");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      setSignedInEmail(null);
      setBusy(false);
      setIsError(true);
      setMessage("Сесія завершилася. Увійдіть знову.");
      return;
    }

    const response = await fetch("/api/admin/participants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.session.access_token}`,
      },
      body: JSON.stringify({ fullName, ticketNumber }),
    });
    const result = await response.json().catch(() => ({}));
    setBusy(false);
    setIsError(!response.ok);
    setMessage(response.ok ? "Учасника додано до списку." : result.error ?? "Не вдалося додати учасника.");
    if (response.ok) {
      setFullName("");
      setTicketNumber("");
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setMessage("");
  };

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#050507] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">Адміністрування</p>
          <h1 className="mt-3 font-(family-name:--font-display) text-3xl font-black tracking-tight text-white">Учасники розіграшу</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-400">Додавайте учасника після підтвердження оплати квитка.</p>
        </div>

        <section className="rounded-2xl border border-white/10 bg-[#0b0b12] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-8">
          {signedInEmail ? (
            <>
              <div className="mb-6 flex items-center justify-between gap-3 text-sm text-zinc-400">
                <span>Ви увійшли як <strong className="text-white">{signedInEmail}</strong></span>
                <button type="button" onClick={signOut} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-zinc-300 hover:bg-white/5 hover:text-white">
                  <LogOut className="size-4" /> Вийти
                </button>
              </div>
              <form onSubmit={addParticipant} className="space-y-5">
                <label className="block text-sm font-semibold text-zinc-200">
                  ПІБ учасника
                  <input required maxLength={120} autoComplete="name" value={fullName} onChange={(event) => setFullName(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cyan-300/60" />
                </label>
                <label className="block text-sm font-semibold text-zinc-200">
                  Номер квитка
                  <input required type="text" maxLength={50} placeholder="000000" value={ticketNumber} onChange={(event) => setTicketNumber(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cyan-300/60" />
                </label>
                <button disabled={busy} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-extrabold text-white transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60">
                  <UserPlus className="size-[18px]" /> {busy ? "Зачекайте…" : "Додати учасника"}
                </button>
              </form>
            </>
          ) : (
            <form onSubmit={signIn} className="space-y-5">
              <div className="mb-2 flex items-center gap-3 text-sm text-zinc-400"><Ticket className="size-5 text-violet-300" /> Увійдіть за обліковим записом, який запросили в Supabase Auth.</div>
              <label className="block text-sm font-semibold text-zinc-200">
                Email
                <input required type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cyan-300/60" />
              </label>
              <label className="block text-sm font-semibold text-zinc-200">
                Пароль
                <input required type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-white outline-none transition focus:border-cyan-300/60" />
              </label>
              <button disabled={busy} className="min-h-12 w-full rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-3 text-sm font-extrabold text-white transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60">{busy ? "Зачекайте…" : "Увійти"}</button>
            </form>
          )}
          {message && <p role="status" className={`mt-5 rounded-xl border px-4 py-3 text-sm ${isError ? "border-rose-300/20 bg-rose-300/5 text-rose-200" : "border-emerald-300/20 bg-emerald-300/5 text-emerald-200"}`}>{message}</p>}
        </section>
      </div>
    </main>
  );
}
