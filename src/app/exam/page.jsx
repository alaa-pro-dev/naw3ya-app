"use client";
import { useState } from 'react';

export default function ExamPage() {
  // حالة لتخزين إجابات المستخدم
  const [userAnswers, setUserAnswers] = useState({});
  // حالة لإظهار النتيجة النهائية
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    { id: 1, q: "العضو المسؤول عن استخلاص البولينا من الدم هو:", options: ["الرئة", "الكلية", "الجلد"], ans: "الكلية" },
    { id: 2, q: "مرض يتسبب في تدمير الشعيرات الدموية بالمثانة:", options: ["البلهارسيا", "الأنفلونزا", "السكر"], ans: "البلهارسيا" },
    { id: 3, q: "تقع الكليتان على جانبي:", options: ["القلب", "المعدة", "العمود الفقري"], ans: "العمود الفقري" },
    { id: 4, q: "أنبوبان رفيعان ينقلان البول من الكلية للمثانة:", options: ["الشرايين", "الحالبان", "الأوردة"], ans: "الحالبان" },
    { id: 5, q: "يتم فلترة الدم داخل الكلية بواسطة أنابيب دقيقة تسمى:", options: ["النفرونات", "الألياف", "المسام"], ans: "النفرونات" }
  ];

  // دالة التعامل مع اختيار الإجابة
  const handleSelect = (questionId, selectedOption) => {
    if (showResult) return; 
    setUserAnswers({ ...userAnswers, [questionId]: selectedOption });
  };

  // دالة حساب الدرجة
  const calculateScore = () => {
    let currentScore = 0;
    questions.forEach((q) => {
      if (userAnswers[q.id] === q.ans) {
        currentScore++;
      }
    });
    setScore(currentScore);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-3xl mx-auto p-6" dir="rtl">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">اختبار وحدة الإخراج في الإنسان</h1>

      {/* عرض النتيجة النهائية */}
      {showResult && (
        <div className="mb-8 p-8 bg-blue-600 text-white rounded-2xl text-center shadow-xl animate-in fade-in zoom-in duration-300">
          <h2 className="text-2xl font-bold mb-2">نتيجة الاختبار</h2>
          <div className="text-5xl font-black mb-2">{score} / {questions.length}</div>
          <p className="text-lg">
            {score === questions.length ? "ممتاز! أحسنت يا بطل 🌟" : "أداء جيد، راجع الدروس لتحسن درجتك ✨"}
          </p>
          <button 
            onClick={() => { setShowResult(false); setUserAnswers({}); setScore(0); }}
            className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            إعادة الاختبار
          </button>
        </div>
      )}

      {/* عرض الأسئلة */}
      <div className="space-y-6">
        {questions.map((item, idx) => (
          <div key={item.id} className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <p className="text-xl font-bold mb-6 text-slate-800">
              {idx + 1}. {item.q}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {item.options.map(opt => {
                const isSelected = userAnswers[item.id] === opt;
                const isCorrect = showResult && opt === item.ans;
                const isWrong = showResult && isSelected && opt !== item.ans;

                return (
                  <button
                    key={opt}
                    onClick={() => handleSelect(item.id, opt)}
                    disabled={showResult}
                    className={`p-4 text-center rounded-lg border-2 transition-all font-medium
                      ${isSelected ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-100 hover:border-blue-200'}
                      ${isCorrect ? 'bg-green-100 border-green-500 text-green-700 !important' : ''}
                      ${isWrong ? 'bg-red-100 border-red-500 text-red-700 !important' : ''}
                    `}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* زر إنهاء الاختبار */}
      {!showResult && (
        <button
          onClick={calculateScore}
          disabled={Object.keys(userAnswers).length < questions.length}
          className={`w-full py-4 rounded-xl font-bold text-xl my-10 transition-all
            ${Object.keys(userAnswers).length < questions.length 
              ? 'bg-slate-300 cursor-not-allowed text-slate-500' 
              : 'bg-green-600 hover:bg-green-700 text-white shadow-lg'}`}
        >
          {Object.keys(userAnswers).length < questions.length 
            ? `أجب على جميع الأسئلة (${Object.keys(userAnswers).length}/${questions.length})` 
            : "عرض النتيجة النهائية"}
        </button>
      )}
    </div>
  );
}