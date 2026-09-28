import Image from "next/image";
import { ArrowRight, Gift } from "lucide-react";
import Link from "next/link";
import { PRIZES } from "@/utils/constants/prizes";



const Giveaway = () => (
  <section id="giveaway" className="relative isolate scroll-mt-24 overflow-hidden border-t border-white/6 bg-[#08080d] px-5 py-20 sm:px-8 sm:py-28">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 size-128 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/30 to-transparent" />
    </div>

    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/6 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
          <Gift className="size-4" /> Святковий розіграш
        </div>
        <h2 className="mt-6 font-(family-name:--font-display) text-3xl font-black tracking-tighter text-white sm:text-4xl lg:text-5xl">
          Твій квиток — <span className="bg-linear-to-r from-violet-300 to-cyan-200 bg-clip-text text-transparent">твій шанс</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
          Святкуй разом із нами та долучайся до розіграшу подарунків. Кожен придбаний квиток бере участь у розіграші, а всі учасники мають однакові шанси на перемогу.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
        {PRIZES.map(({ place, name, detail, image, accent, color }) => (
          <article key={place} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#101018] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:shadow-[0_20px_60px_rgba(139,92,246,0.1)] sm:p-8">
            <div aria-hidden="true" className={`absolute inset-0 bg-linear-to-br ${accent} opacity-70 transition-opacity group-hover:opacity-100`} />
            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="relative h-40 w-full overflow-hidden rounded-xl border border-white/[0.07] bg-black/20 sm:h-48">
                  <Image src={image} alt={name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain p-3 transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
              <p className={`mt-5 text-[10px] font-bold uppercase tracking-[0.2em] ${color}`}>Приз {place}</p>
              <h3 className="mt-8 font-(family-name:--font-display) text-xl font-bold tracking-tight text-white sm:text-2xl">{name}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{detail}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-violet-300/15 bg-white/3 p-5 sm:flex-row sm:px-7">
        <div className="flex items-start gap-3 text-center sm:text-left">
          <Gift className="mt-0.5 hidden size-5 shrink-0 text-violet-300 sm:block" />
          <p className="text-sm leading-6 text-zinc-300">Купуй квиток на концерт і автоматично ставай учасником розіграшу.</p>
        </div>
        <Link href="#tickets" className="group inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-violet-300/30 bg-violet-400/10 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300/50 hover:bg-cyan-300/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">
          Купити квиток <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  </section>
);

export default Giveaway;
