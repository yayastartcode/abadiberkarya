export default function Gallery() {
  const projects = [
    {
      title: 'Rumah Minimalis Modern',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600',
    },
    {
      title: 'Gedung Perkantoran',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
    },
    {
      title: 'Villa Resort',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600',
    },
    {
      title: 'Apartemen Mewah',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600',
    },
    {
      title: 'Rumah Tropis',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
    },
    {
      title: 'Ruko Commercial',
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600',
    },
    {
      title: 'Renovasi Interior',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600',
    },
    {
      title: 'Gudang Industri',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600',
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Galeri Proyek</h2>
          <p className="text-xl text-gray-600">Portfolio proyek konstruksi yang telah kami selesaikan</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <p className="text-white font-semibold text-center px-4">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
