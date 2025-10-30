import { Building2, Hammer, PenTool, Home, Wrench, Building } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'

export default function Services() {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: 'Pembangunan Rumah',
      description: 'Membangun rumah impian Anda dengan desain modern dan kualitas terbaik.',
    },
    {
      icon: <Hammer className="w-12 h-12 text-blue-600" />,
      title: 'Renovasi Bangunan',
      description: 'Renovasi dan perbaikan bangunan lama menjadi lebih modern dan fungsional.',
    },
    {
      icon: <PenTool className="w-12 h-12 text-blue-600" />,
      title: 'Desain Arsitektur',
      description: 'Layanan desain arsitektur profesional sesuai kebutuhan dan budget Anda.',
    },
    {
      icon: <Building className="w-12 h-12 text-blue-600" />,
      title: 'Konstruksi Komersial',
      description: 'Pembangunan gedung komersial, perkantoran, dan fasilitas umum.',
    },
    {
      icon: <Building2 className="w-12 h-12 text-blue-600" />,
      title: 'Infrastruktur',
      description: 'Pembangunan infrastruktur jalan, jembatan, dan fasilitas publik.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'Maintenance',
      description: 'Layanan perawatan dan maintenance berkala untuk bangunan Anda.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600">Solusi konstruksi lengkap untuk berbagai kebutuhan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
