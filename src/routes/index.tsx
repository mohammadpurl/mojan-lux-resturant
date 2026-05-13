import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Spaces } from "@/components/Spaces";
import { GalleryPreview } from "@/components/GalleryPreview";
import { WhyMozhan } from "@/components/WhyMozhan";
import { MenuPreview } from "@/components/MenuPreview";
import { PrivateEvents } from "@/components/PrivateEvents";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingBale } from "@/components/FloatingBale";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Spaces />
        <GalleryPreview />
        <WhyMozhan />
        <MenuPreview />
        <PrivateEvents />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingBale />
    </div>
  );
}
