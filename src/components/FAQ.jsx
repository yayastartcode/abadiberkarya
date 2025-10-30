import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'

export default function FAQ() {
  const faqs = [
    {
      question: 'Berapa lama waktu pengerjaan proyek?',
      answer: 'Waktu pengerjaan bervariasi tergantung skala proyek. Untuk rumah tinggal biasanya 3-6 bulan, gedung komersial 6-12 bulan. Kami akan memberikan timeline yang jelas setelah konsultasi awal.',
    },
    {
      question: 'Apakah melayani area luar kota?',
      answer: 'Ya, kami melayani proyek konstruksi di seluruh wilayah Indonesia. Untuk area luar kota, akan ada biaya mobilisasi yang disesuaikan dengan lokasi proyek.',
    },
    {
      question: 'Bagaimana cara konsultasi awal?',
      answer: 'Anda dapat menghubungi kami melalui formulir kontak, telepon, atau email. Konsultasi awal gratis untuk membahas kebutuhan proyek Anda.',
    },
    {
      question: 'Apakah menyediakan jasa desain?',
      answer: 'Ya, kami menyediakan layanan desain arsitektur lengkap mulai dari konsep, gambar kerja, hingga perhitungan RAB (Rencana Anggaran Biaya).',
    },
    {
      question: 'Apakah ada garansi untuk pekerjaan yang dilakukan?',
      answer: 'Semua pekerjaan kami dilindungi garansi konstruksi sesuai standar industri. Garansi mencakup struktur dan kualitas pekerjaan selama periode tertentu.',
    },
    {
      question: 'Bagaimana sistem pembayaran?',
      answer: 'Sistem pembayaran mengikuti progres pekerjaan (termin). Biasanya dibagi menjadi beberapa tahap: DP, progress 30%, 60%, dan pelunasan setelah pekerjaan selesai.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
          <p className="text-xl text-gray-600">Jawaban untuk pertanyaan yang sering diajukan</p>
        </div>

        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
