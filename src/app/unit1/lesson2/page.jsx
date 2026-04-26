export default function LessonTwo() {
  const tips = [
    "شرب الماء بكميات كافية يومياً.",
    "تجنب الإصابة بالبلهارسيا (لأنها تدمر المثانة).",
    "تقليل تناول الأطعمة المملحة والحوادق لتجنب الحصوات."
  ];

  return (
    <main className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-8">آلية تنقية الدم وصحة الجهاز البولي</h1>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-bold text-lg mb-4 text-orange-600">كيف يتم التنقية؟</h3>
          <p>تحتوي كل كلية على حوالي <strong>مليون أنبوبة دقيقة (نفرونات)</strong> تقوم بفلترة الدم.</p>
          <p className="mt-4 p-3 bg-orange-50 rounded italic">
            يدخل الدم عبر الشريان الكلوي محملاً بالبولينا، ويخرج نقياً عبر الوريد الكلوي.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="font-bold text-lg mb-4 text-green-600">المحافظة على الجهاز</h3>
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start">
                <span className="bg-green-100 text-green-700 rounded-full h-6 w-6 flex items-center justify-center ml-2 text-sm">{i+1}</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}