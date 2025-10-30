import { motion } from "framer-motion";
import { ClipboardList, PenTool, HardHat, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Konsultasi & Survei Lokasi Gratis",
      description: "Menyerap kebutuhan klien serta meninjau lokasi proyek.",
      number: "01",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: PenTool,
      title: "Perancangan Desain & Penawaran Harga",
      description:
        "Memberikan desain sesuai permintaan serta penawaran harga yang transparan.",
      number: "02",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HardHat,
      title: "Pelaksanaan Proyek",
      description:
        "Dikerjakan tim profesional dengan pengawasan ketat agar sesuai target.",
      number: "03",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: CheckCircle,
      title: "Serah Terima & Garansi",
      description: "Hasil pekerjaan diserahkan lengkap dengan garansi.",
      number: "04",
      color: "from-green-500 to-emerald-500",
    },
  ];

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

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const stepVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proses Kerja yang Jelas & Transparan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Untuk memastikan hasil maksimal, kami menerapkan alur kerja yang
            terstruktur:
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={lineVariants}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 via-orange-500 to-green-500"
            />
          </div>

          {/* Timeline Steps */}
          <div className="relative space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={stepVariants}
                  className={`relative flex items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`w-full md:w-5/12 ${
                      isEven
                        ? "md:pr-12 pl-20 md:pl-0"
                        : "md:pl-12 pl-20 md:pr-0"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                      {/* Number Badge */}
                      <div
                        className={`inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-sm`}
                      >
                        Langkah No {step.number}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} p-0.5 shadow-lg`}
                    >
                      <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <Icon className="w-7 h-7 text-gray-700" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
