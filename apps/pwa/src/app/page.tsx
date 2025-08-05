'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-full flex">
      <Link href="/" className="text-cyan-400 text-2xl mx-auto mt-36">
        برو به صفحه اصلی
      </Link>
    </div>
  );
}
