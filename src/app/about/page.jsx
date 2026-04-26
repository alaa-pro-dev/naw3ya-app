export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* الجزء العلوي (Header) - تم تغيير الخلفية من الأسود إلى التدرج الأزرق */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-6 animate-fade-in">منصة تعليمية</h1>
          <p className="text-blue-50 text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
            نحن نسعى لتطوير تجربة التعلم الرقمي وجعل العلوم مادة ممتعة وسهلة الفهم لكل طالب.
          </p>
        </div>
      </section>

      {/* الرؤية والرسالة */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-800">رؤيتنا</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-8 text-lg">
              تطوير بيئة تعليمية ذكية تدمج بين التكنولوجيا الحديثة والمناهج الدراسية الرسمية، لتوفير محتوى دقيق وشامل يساعد الطلاب على التفوق الدراسي والتميز العلمي.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-blue-50 rounded-2xl">
                <span className="text-blue-600 ml-3 text-xl">✔</span>
                <p className="text-slate-700 font-medium">تبسيط المفاهيم العلمية المعقدة.</p>
              </div>
              <div className="flex items-center p-4 bg-blue-50 rounded-2xl">
                <span className="text-blue-600 ml-3 text-xl">✔</span>
                <p className="text-slate-700 font-medium">توفير أدوات تقييم ذاتي فورية للطلاب.</p>
              </div>
              <div className="flex items-center p-4 bg-blue-50 rounded-2xl">
                <span className="text-blue-600 ml-3 text-xl">✔</span>
                <p className="text-slate-700 font-medium">دعم تعلم مادة العلوم وفق أحدث المعايير.</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-[2.5rem] border border-blue-100 shadow-sm relative overflow-hidden">
             {/* شكل ديكوري خلف الأيقونة */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
             
             <div className="relative z-10 text-center">
                <div className="text-7xl mb-6 drop-shadow-lg">🚀</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">لماذا "نوعية"؟</h3>
                <p className="text-blue-800 leading-relaxed">
                  لأننا نؤمن أن التعليم لا يجب أن يكون مجرد تلقين، بل هو تجربة <span className="font-bold underline decoration-wavy">"نوعية"</span> تترك أثراً حقيقياً في فهم الطالب واهتمامه بالعلوم.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* قسم التواصل - تم تعديل الخلفية لتكون أفتح وأرقى */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">تواصل معنا</h2>
            <p className="text-slate-500 mb-10 text-lg">هل لديك أي استفسارات حول المحتوى التعليمي؟</p>
            <a 
              href="mailto:support@naw3ya.edu" 
              className="inline-block bg-blue-600 text-white px-12 py-4 rounded-2xl font-bold hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              إرسال بريد إلكتروني
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}