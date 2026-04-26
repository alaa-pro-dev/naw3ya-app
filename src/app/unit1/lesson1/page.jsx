export default function LessonOne() {
  return (
    <main className="container mx-auto p-8 max-w-4xl" dir="rtl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-700">تركيب الجهاز البولي ووظائفه</h1>
        <p className="text-slate-500 mt-2">الصف الثاني الإعدادي - مادة العلوم</p>
      </header>

      <section className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-3 border-b border-blue-200 pb-2">أهداف الدرس</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li>أن يتعرف الطالب على الجهاز البولي كأحد أجهزة الإخراج.</li>
          <li>أن يحدد مكونات الجهاز البولي (الكليتان، الحالبان، المثانة).</li>
        </ul>
      </section>

      <article className="prose lg:prose-xl">
        <h3 className="text-xl font-bold mb-4 text-slate-800">شرح الدرس</h3>
        
        {/* قسم الصورة التوضيحية */}
        <div className="mb-8 bg-white p-4 rounded-2xl shadow-md border border-slate-200">
          <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
            {/* يمكنك استبدال الرابط أدناه برابط صورتك الخاصة */}
            <img 
              src="/images/5.jpg"
            
              alt="رسم توضيحي للجهاز البولي"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-3 italic">
            رسم توضيحي يوضح مكونات الجهاز البولي في جسم الإنسان
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 mb-6">
          <p className="mb-6 text-lg">
            <span className="bg-yellow-100 px-2 py-1 rounded font-bold text-yellow-800">الإخراج:</span> 
            هو عملية تخلص الجسم من الفضلات الناتجة عن هدم الغذاء داخل الخلايا.
          </p>

          <div className="space-y-4">
            <div className="p-4 bg-blue-50/50 rounded-xl border-r-4 border-blue-600 transition-hover hover:bg-blue-50">
              <span className="font-bold text-blue-700 text-lg block mb-1">1. الكليتان:</span> 
              أهم أعضاء الإخراج، تقعان في التجويف البطني جهة الظهر على جانبي العمود الفقري، وتشبهان حبة الفاصوليا.
            </div>

            <div className="p-4 bg-blue-50/50 rounded-xl border-r-4 border-blue-600 transition-hover hover:bg-blue-50">
              <span className="font-bold text-blue-700 text-lg block mb-1">2. الحالبان:</span> 
              أنبوبان رفيعان يصلان بين الكلية والمثانة، وظيفتهما نقل البول قطرة بقطرة.
            </div>

            <div className="p-4 bg-blue-50/50 rounded-xl border-r-4 border-blue-600 transition-hover hover:bg-blue-50">
              <span className="font-bold text-blue-700 text-lg block mb-1">3. المثانة البولية:</span> 
              كيس عضلي مرن يختزن البول حتى يشعر الإنسان بالرغبة في طرده خارج الجسم عبر قناة مجرى البول.
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}