import AdminParticipants from "@/components/admin/AdminParticipants";

export const metadata = {
  title: "Адміністрування учасників | 60 років ФМЦТ",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return <AdminParticipants />;
}
