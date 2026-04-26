import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <header className="bg-white shadow-md p-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            
            {/* اسم المنصة */}
            <h1 className="text-2xl font-bold text-blue-600 mb-4 md:mb-0">
              منصة التعلم التفاعلية
            </h1>

            {/* روابط التنقل */}
            <nav className="flex items-center justify-between w-full md:w-auto md:gap-12">
              <Link href="/" className="hover:text-blue-500 transition-colors flex-1 text-center">
                الرئيسية
              </Link>
              <Link href="/units" className="hover:text-blue-500 transition-colors flex-1 text-center px-4">
                الوحدات
              </Link>
              <Link href="/exam" className="hover:text-blue-500 transition-colors flex-1 text-center">
                الاختبارات
              </Link>
            </nav>

          </div>
        </header>

        <main className="container mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}