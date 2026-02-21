import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20 py-8 text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-6 flex justify-between">
        <p>© 2026 TaskNova. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/privacy" className="hover:underline">
            Your Privacy
          </Link>
          <Link href="/cookie-policy" className="hover:underline">
            Our Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
