import Link from "next/link";

export default function Header() {
  return (
    <nav className="backdrop-blur bg-white/80 border-b border-gray-100 shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-[#2C5D47] tracking-tight">
            My technical history
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-[#2C5D47] transition-colors duration-200 font-medium"
            >
              ホーム
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#2C5D47] transition-colors duration-200 font-medium"
            >
              自己紹介
            </Link>
            <Link
              href="/projects"
              className="text-gray-600 hover:text-[#2C5D47] transition-colors duration-200 font-medium"
            >
              プロジェクト
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 