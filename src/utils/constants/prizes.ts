interface IPrize{
    place: string;
    name:string;
    detail:string;
    image:string;
    accent:string;
    color:string;
}

export const PRIZES:IPrize[] = [
  {
    place: "01",
    name: "AirPods 4",
    detail: "Бездротовий звук для твоїх улюблених треків",
    image: "/airpods.png",
    accent: "from-violet-500/20 to-fuchsia-400/5",
    color: "text-violet-300",
  },
  {
    place: "02",
    name: "Кавомашина Zepline",
    detail: "Ароматна кава для яскравих ранків",
    image: "/coffee_machine.png",
    accent: "from-cyan-500/20 to-blue-400/5",
    color: "text-cyan-300",
  },
  {
    place: "03",
    name: "Принтер",
    detail: "Корисний подарунок для навчання та роботи",
    image: "/printer.png",
    accent: "from-fuchsia-500/20 to-violet-400/5",
    color: "text-fuchsia-300",
  },
];