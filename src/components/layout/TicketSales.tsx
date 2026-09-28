import { CalendarDays, Check, CircleHelp, CreditCard, HeartHandshake, MapPin, Ticket } from "lucide-react";

const BANK_URL = "https://send.monobank.ua/jar/7mRu3fWkr";

const TicketSales = () => (
  <section id="how-to-buy" className="relative isolate scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-[#050507] px-5 py-20 sm:px-8 sm:py-28">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -right-40 top-1/4 size-[28rem] rounded-full bg-cyan-500/[0.08] blur-[120px]" />
      <div className="absolute -left-40 bottom-0 size-[26rem] rounded-full bg-violet-600/[0.1] blur-[120px]" />
    </div>

    <div className="mx-auto max-w-7xl">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
          <Ticket className="size-4" /> Квитки на концерт
        </div>
        <h2 className="mt-6 font-(family-name:--font-display) text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
          Будь частиною <span className="bg-gradient-to-r from-violet-300 to-cyan-200 bg-clip-text text-transparent">свята</span>
        </h2>
        <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
          Один квиток — концерт, розіграш подарунків і підтримка українських військових.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-300/20 bg-[#101018] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-9">
          <div aria-hidden="true" className="absolute -right-16 -top-20 size-64 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">Вхідний квиток</p>
              <p className="mt-4 font-(family-name:--font-display) text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl">100 <span className="text-3xl text-cyan-300">₴</span></p>
              <p className="mt-3 text-sm text-zinc-400">У вартість входить участь у розіграші</p>
            </div>
            <div className="flex size-16 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-400/10 text-violet-200 shadow-[0_0_30px_rgba(139,92,246,0.14)]">
              <Ticket className="size-8" />
            </div>
          </div>

          <div className="relative mt-8 grid gap-4 border-t border-white/[0.08] pt-6 text-sm text-zinc-300 sm:grid-cols-2">
            <div className="flex items-center gap-3"><CalendarDays className="size-5 shrink-0 text-violet-300" /><span>6 жовтня · 16:00</span></div>
            <div className="flex items-center gap-3"><MapPin className="size-5 shrink-0 text-cyan-300" /><span>Велика зала ректорату УжНУ</span></div>
          </div>
          <div className="relative mt-7 flex items-start gap-3 rounded-xl border border-emerald-300/10 bg-emerald-300/[0.04] p-4 text-sm leading-6 text-zinc-300">
            <HeartHandshake className="mt-0.5 size-5 shrink-0 text-emerald-300" />
            <p>Усі кошти, зібрані під час концерту, передамо на підтримку українських військових.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07] text-cyan-200"><CreditCard className="size-5" /></div>
            <div>
              <h3 className="font-(family-name:--font-display) text-lg font-bold text-white">Як придбати квиток</h3>
              <p className="mt-1 text-xs text-zinc-500">Коротка інструкція</p>
            </div>
          </div>
          <ol className="mt-7 space-y-5">
            {[
              "Підготуйте оплату за квиток — 100 ₴.",
              "Під час переказу обов’язково вкажіть своє прізвище, ім’я та по батькові (ПІБ) у призначенні платежу.",
              "Збережіть підтвердження оплати до отримання квитка.",
            ].map((step, index) => (
              <li key={step} className="flex gap-4 text-sm leading-6 text-zinc-300">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-violet-300/20 bg-violet-400/10 text-xs font-bold text-violet-200">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-7 rounded-2xl border border-amber-300/15 bg-amber-300/[0.04] p-4">
            <p className="flex items-center gap-2 text-sm font-bold text-amber-100"><CircleHelp className="size-4" /> Важливо: </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">Кожен учасник може придбати лише один квиток, тому всі учасники мають однакові шанси на перемогу</p>
          </div>

          <a
            href={BANK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 text-sm font-extrabold text-white shadow-[0_0_24px_rgba(139,92,246,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(34,211,238,0.25)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            <CreditCard className="size-[18px]" /> Перейти до оплати
          </a>

          <p className="mt-5 flex items-start gap-2 text-xs leading-5 text-zinc-400"><Check className="mt-0.5 size-4 shrink-0 text-cyan-300" /> У коментарі до переказу обов’язково вкажіть ПІБ — без цього ми не зможемо додати вас до списку учасників.</p>
          <p className="mt-3 text-xs text-zinc-500">Квиток також дає шанс виграти один із призів розіграшу.</p>
        </div>
      </div>
    </div>
  </section>
);

export default TicketSales;
