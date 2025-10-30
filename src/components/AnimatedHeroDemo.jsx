import { AnimatedHero } from "@/components/ui/animated-hero-section-1";
import { Button } from "@/components/ui/button";

export default function AnimatedHeroDemo() {
  const navLinks = [
    { label: "Beranda", href: "#hero" },
    { label: "Layanan", href: "#services" },
    { label: "Galeri", href: "#gallery" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#contact" },
  ];

  const handleCtaClick = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSecondaryCtaClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedHero
      backgroundImageUrl="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920"
      logo={
        <>
          <img
            src="/cvabdlg.png"
            alt="Konstruksi Indonesia Logo"
            className="h-20"
          />
        </>
      }
      navLinks={navLinks}
      topRightAction={
        <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground hover:bg-white/20">
          Hubungi Kami
        </Button>
      }
      title="Jasa Kontraktor Bangunan & Drainase Profesional dan Terpercaya"
      description="Solusi konstruksi dan drainase terpercaya di Indonesia, dengan
          pengalaman luas dalam proyek bangunan komersil, perumahan, dan
          infrastruktur."
      ctaButton={{
        text: "Lihat Layanan",
        onClick: handleCtaClick,
      }}
      secondaryCta={{
        text: "Hubungi Kami",
        onClick: handleSecondaryCtaClick,
      }}
    />
  );
}
