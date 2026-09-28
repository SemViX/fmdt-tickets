import { supabase } from "@/lib/supabase";
import { ClipboardList, Ticket } from "lucide-react";

const ParticipantsTable = async () => {
  const { data, error } = await supabase
    .from("participants")
    .select("full_name, ticket_number")
    .order("ticket_number", { ascending: true });

  const participants = (data ?? []).map((participant) => ({
    fullName: participant.full_name,
    ticketNumber: String(participant.ticket_number),
  }));

  return (
    <section
      id="participants"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-[#050507] px-5 py-20 sm:px-8 sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 size-96 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              <ClipboardList className="size-4" /> Розіграш
            </div>
            <h2 className="mt-5 font-(family-name:--font-display) text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
              Учасники розіграшу
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
              Список оновлюється вручну після підтвердження оплати квитка.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
            <Ticket className="size-4 text-violet-300" /> Учасників:
            <span className="font-bold text-white">{participants.length}</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b12]/90 shadow-[0_24px_80px_rgba(0,0,0,0.25)]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.14em] text-zinc-400">
                <tr>
                  <th scope="col" className="w-24 px-5 py-4 font-semibold sm:px-7">№</th>
                  <th scope="col" className="px-5 py-4 font-semibold sm:px-7">ПІБ учасника</th>
                  <th scope="col" className="w-48 px-5 py-4 font-semibold sm:px-7">Номер квитка</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.07]">
                {error ? (
                  <tr>
                    <td colSpan={3} className="px-5 py-12 text-center text-sm text-rose-300 sm:px-7">
                      Не вдалося завантажити список учасників. Спробуйте пізніше.
                    </td>
                  </tr>
                ) : participants.length > 0 ? (
                  participants.map((participant, index) => (
                    <tr
                      key={`${participant.ticketNumber}-${participant.fullName}`}
                      className="text-zinc-200 transition-colors hover:bg-white/[0.025]"
                    >
                      <td className="px-5 py-4 font-mono text-zinc-500 sm:px-7">
                        {String(index + 1).padStart(2, "0")}
                      </td>
                      <td className="px-5 py-4 font-medium sm:px-7">{participant.fullName}</td>
                      <td className="px-5 py-4 font-mono text-cyan-200 sm:px-7">{participant.ticketNumber}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="px-5 py-12 text-center sm:px-7">
                      <ClipboardList className="mx-auto size-7 text-zinc-600" />
                      <p className="mt-3 text-sm font-semibold text-zinc-300">
                        Список учасників поки порожній
                      </p>
                      <p className="mt-1 text-xs text-zinc-500">
                        Імена та номери квитків з’являться після підтвердження оплат.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="border-t border-white/[0.07] px-5 py-3 text-xs text-zinc-500 sm:px-7">
            Кожному учаснику відповідає придбаний квиток із власним номером.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantsTable;
