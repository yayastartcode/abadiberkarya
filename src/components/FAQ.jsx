import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan rata-rata?",
      answer:
        "Waktu pengerjaan proyek sangat bervariasi, umumnya berkisar antara 3 hingga 6 bulan, tergantung pada skala dan kompleksitas proyek yang dikerjakan.",
    },
    {
      question: "Apakah ada garansi untuk pekerjaan yang dilakukan?",
      answer:
        "Ya, 5 tahun untuk struktur dan 1 tahun untuk instalasi. Kami menjamin kualitas dan ketahanan hasil kerja kami.",
    },
    {
      question:
        "Apakah bisa mendapatkan konsultasi gratis sebelum memulai proyek?",
      answer:
        "Tentu saja! Kami menyediakan layanan konsultasi dan survei lokasi gratis untuk membantu Anda merencanakan proyek impian Anda tanpa ada biaya di awal.",
    },
    {
      question: "Apakah hanya melayani Bandar Lampung?",
      answer:
        "Tidak, kami juga melayani Jabodetabek dan area lainnya di Indonesia.",
    },
    {
      question: "Berapa Harga Bangunan /m2",
      answer:
        "Start From 3,7 jt / m2 s.d 8 jt/m2. Harga di tentukan berdasarkan Desain, Material yang di gunakan dan tingkat kesulitan pekerjaan.",
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pertanyaan Umum
          </h2>
          <p className="text-xl text-gray-600">
            Jawaban untuk pertanyaan yang sering diajukan
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 group"
              >
                <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-blue-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2, delay: 0.1 },
                      },
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3 },
                        opacity: { duration: 0.2 },
                      },
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4" />
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
