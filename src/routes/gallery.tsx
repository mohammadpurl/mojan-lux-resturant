import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingBale } from "@/components/FloatingBale";
import { GalleryPage } from "@/components/GalleryPage";

export const Route = createFileRoute("/gallery")({
  component: GalleryLayout,
});

function GalleryLayout() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Header />
      <main>
        <GalleryPage />
      </main>
      <Footer />
      <FloatingBale />
    </div>
  );
}
