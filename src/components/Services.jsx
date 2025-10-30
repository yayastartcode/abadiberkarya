import { Building2, Hammer, Droplets, Construction } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Pembangunan Rumah & Gedung',
      description: 'Membangun rumah, ruko, restoran, hotel, kos-kosan, hingga gedung bertingkat.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Hammer,
      title: 'Renovasi & Remodeling',
      description: 'Layanan renovasi interior & eksterior sesuai desain dan kebutuhan.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Droplets,
      title: 'Sistem Drainase',
      description: 'Pembuatan saluran air, pembuangan limbah, hingga solusi anti-banjir untuk perumahan dan kawasan komersial.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Construction,
      title: 'Pekerjaan Sipil & Infrastruktur',
      description: 'Pembangunan jalan, jembatan, pematangan lahan, dan proyek infrastruktur lain dengan standar tinggi.',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

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
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600">Solusi konstruksi lengkap untuk berbagai kebutuhan</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon with gradient background */}
                <div className={`relative mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                  <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-700 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
