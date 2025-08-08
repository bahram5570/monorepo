'use client';

import a from '@repo/assets/images/avatar.png'
import b from '@repo/assets/fonts/YekanBakh-VF.ttf'
import AAA from '@repo/ui/AAA';
import BBB from '@repo/ui/BBB';
import Link from 'next/link';

export default function Home() {

  console.log(b);
  
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <AAA name='a' />
      <BBB />

      <img src={a.src} className='w-20 h-20' />

      <Link href="/" className="text-cyan-400 text-2xl mx-auto mt-36">
        برو به صفحه اصلی
      </Link>
    </div>
  );
}
