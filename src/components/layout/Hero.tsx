import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, CalendarDays, MapPin, Ticket } from "lucide-react";

const Hero = () => (
  <main className="relative isolate overflow-hidden">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-48 top-12 size-112 rounded-full bg-violet-600/15 blur-[120px]" />
      <div className="absolute -right-40 top-40 size-120 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/50 to-transparent" />
    </div>

    <section className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:py-20">
      <div className="relative z-10">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-white/4 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200 shadow-[0_0_30px_rgba(139,92,246,0.12)] sm:text-sm">
          <span className="size-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee]" />
          ФМЦТ · 60 років
        </div>

        <h1 className="max-w-3xl font-(family-name:--font-display) text-4xl font-black leading-[1.12] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
          Святкуємо <span className="bg-linear-to-r from-violet-300 via-white to-cyan-200 bg-clip-text text-transparent">разом</span>
          <span className="mt-2 block text-2xl font-bold tracking-[-0.04em] text-zinc-300 sm:text-3xl lg:text-4xl">60-річчя ФМЦТ</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          Великий святковий концерт, зустрічі та розіграш подарунків. Проведімо цей вечір разом і допоможімо тим, хто нас захищає.
        </p>

        <div className="mt-8 flex flex-col gap-3 text-sm text-zinc-200 sm:flex-row sm:flex-wrap sm:gap-5">
          <div className="inline-flex items-center gap-2.5"><CalendarDays className="size-5 text-violet-300" /><span>6 жовтня · 16:00</span></div>
          <div className="inline-flex items-center gap-2.5"><MapPin className="size-5 text-cyan-300" /><span>Велика зала ректорату УжНУ</span></div>
        </div>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link href="#tickets" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-linear-to-r from-violet-600 to-cyan-500 px-7 py-4 text-sm font-extrabold text-white shadow-[0_0_32px_rgba(139,92,246,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_42px_rgba(34,211,238,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
            <Ticket className="size-5" /> Купити квиток за 100 ₴ <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-xs leading-5 text-zinc-500">Усі кошти з концерту — на підтримку<br className="hidden sm:block" /> українських військових</p>
        </div>

        <a href="#about" className="mt-12 hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 transition hover:text-cyan-200 md:inline-flex">
          Дізнатися більше <ArrowDown className="size-4" />
        </a>
      </div>

      <div className="relative mx-auto w-full max-w-124 md:max-w-none">
        <div aria-hidden="true" className="absolute -inset-5 rounded-4xl bg-linear-to-br from-violet-500/20 via-transparent to-cyan-400/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.55)] backdrop-blur-sm sm:rounded-4xl sm:p-3">
          <Image src="/ps.jpg" alt="Афіша святкування 60-річчя ФМЦТ" width={1200} height={1600} priority className="h-auto w-full rounded-[1.1rem] object-cover sm:rounded-[1.5rem]" />
          <div className="pointer-events-none absolute inset-x-3 bottom-3 h-24 rounded-b-[1.1rem] bg-linear-to-t from-black/40 to-transparent sm:inset-x-4 sm:bottom-4 sm:rounded-b-3xl" />
        </div>
        <div className="absolute -bottom-5 -left-2 rounded-2xl border border-cyan-200/20 bg-[#0b0b12]/90 px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:-left-8 sm:px-5 sm:py-4">
          <p className="font-(family-name:--font-display) text-xl font-black text-white">100 <span className="text-cyan-300">₴</span></p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">квиток + участь у розіграші</p>
        </div>
      </div>
    </section>
  </main>
);

export default Hero;
