import Hero from "@/components/layout/Hero";
import Giveaway from "@/components/layout/Giveaway";
import TicketSales from "@/components/layout/TicketSales";
import ParticipantsTable from "@/components/layout/ParticipantsTable";

export const dynamic = "force-dynamic";

export default function Home() {
  return <>
    <Hero />
    <TicketSales />
    <Giveaway />
    <ParticipantsTable />
  </>;
}
