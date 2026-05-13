import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingBale } from "@/components/FloatingBale";
import { MenuPage } from "@/components/MenuPage";

export const Route = createFileRoute("/menu")({
  component: MenuRouteLayout,
});

function MenuRouteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <MenuPage />
      </main>
      <Footer />
      <FloatingBale />
    </div>
  );
}
