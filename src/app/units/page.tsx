export default function UnitsPage() {
  const unit1Lessons = [
    { 
      id: 1, 
      title: "تركيب الجهاز البولي ووظائفه", 
      description: "تعرف على مكونات الجهاز البولي (الكليتان، الحالبان، المثانة) ودورها في الإخراج.",
      path: "/unit1/lesson1",
      icon: "🧪",
      image: "/images/1.jpg" // ضع مسار صورتك هنا
    },
    { 
      id: 2, 
      title: "آلية تنقية الدم وصحة الجهاز البولي", 
      description: "شرح دور النفرونات في ترشيح الفضلات وكيفية المحافظة على صحة الكلى.",
      path: "/unit1/lesson2",
      icon: "🛡️",
      image: "/images/2.jpg" // ضع مسار صورتك هنا
    },
  ];

  return (
    <main className="container mx-auto p-8 max-w-6xl">
      <header className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">وحدات المنهج الدراسي</h2>
        <p className="text-slate-600">منهج العلوم للصف الثاني الإعدادي - وحدة الإخراج في الإنسان </p>
      </header>
      
      <div className="space-y-12">
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
            <h3 className="text-2xl font-bold text-slate-800">الوحدة الأولى: الإخراج في الإنسان </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {unit1Lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* صورة الدرس */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img 
                    src={lesson.image} 
                    alt={lesson.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* أيقونة الدرس فوق الصورة */}
                  <div className="absolute bottom-4 right-4 text-2xl bg-white/90 backdrop-blur-sm w-12 h-12 flex items-center justify-center rounded-xl shadow-lg">
                    {lesson.icon}
                  </div>
                </div>

                {/* محتوى الكرت */}
                <div className="p-8">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    الدرس {lesson.id}: {lesson.title} 
                  </h4>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {lesson.description} 
                  </p>

                  {/* زر الانتقال */}
                  <a 
                    href={lesson.path}
                    className="inline-flex items-center justify-center w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-colors gap-2"
                  >
                    ابدأ الدرس الآن
                    <span className="text-xl">←</span>
                  </a>
                </div>

                {/* رقم الدرس في الخلفية */}
                <span className="absolute top-4 left-6 text-6xl font-black text-white/20 z-10 select-none pointer-events-none">
                  0{lesson.id}
                </span>
              </div>
            ))}
          </div>

          {/* كرت سريع للاختبار */}
          <div className="mt-12 bg-linear-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-lg">
            <div className="mb-6 md:mb-0 text-center md:text-right">
              <h4 className="text-2xl font-bold mb-2">مستعد للاختبار الشامل؟</h4>
              <p className="text-blue-100 opacity-90">اختبر مهاراتك في دروس الوحدة الأولى الآن </p>
            </div>
            <a 
              href="/exam" 
              className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-black hover:bg-blue-50 transition-colors shadow-xl"
            >
              دخول بنك الأسئلة 
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}