import { motion } from 'framer-motion';
import { CheckCircle2, Shield, DollarSign, Users, ClipboardCheck, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Profesional & Berpengalaman",
      description: "Dikerjakan oleh tim ahli dengan pengalaman di bidang konstruksi dan sipil.",
    },
    {
      icon: DollarSign,
      title: "Harga Transparan & Kompetitif",
      description: "Estimasi jelas tanpa biaya tersembunyi.",
    },
    {
      icon: Shield,
      title: "Garansi Pekerjaan",
      description: "Struktur bangunan hingga 5 tahun, instalasi 1 tahun.",
    },
    {
      icon: Users,
      title: "Melayani Skala Besar & Kecil",
      description: "Dari rumah pribadi hingga proyek gedung besar.",
    },
    {
      icon: ClipboardCheck,
      title: "Konsultasi & Survei Gratis",
      description: "Tanpa biaya untuk tahap awal perencanaan proyek.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mengapa Harus Memilih CV. Abadi Berkarya Contractor?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami memahami bahwa memilih kontraktor bukanlah hal mudah. Karena itu, kami memberikan berbagai keunggulan yang membuat kami berbeda:
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
