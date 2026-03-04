import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-yellow border-t border-yellow-500/20 mt-20 py-8 text-sm text-gray-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* COPYRIGHT */}
        <p>© 2026 TaskNova. All rights reserved.</p>
        
        {/* LINKS */}
        <div className="flex space-x-6">
          <Link
            href="/terms"
            className="text-yellow-400 hover:text-black hover:shadow-[0_0_10px_white] transition-all duration-300"
          >
            Terms of Service
          </Link>

          <Link
            href="/privacy"
            className="text-yellow-400 hover:text-black hover:shadow-[0_0_10px_white] transition-all duration-300"
          >
            Your Privacy
          </Link>

          <Link
            href="/cookie-policy"
            className="text-yellow-400 hover:text-black hover:shadow-[0_0_10px_white] transition-all duration-300"
          >
            Our Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}