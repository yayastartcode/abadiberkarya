import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[600px] flex items-center justify-center bg-gray-100"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Jasa Kontraktor Bangunan & Drainase Profesional dan Terpercaya
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Solusi konstruksi dan drainase terpercaya di Indonesia, dengan
          pengalaman luas dalam proyek bangunan komersil, perumahan, dan
          infrastruktur. Kami fokus pada kualitas, ketepatan waktu, dan kepuasan
          pelanggan.
        </p>
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Hubungi Kami
        </Button>
      </div>
    </section>
  );
}
