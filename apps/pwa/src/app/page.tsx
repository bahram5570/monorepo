'use client';

import RepoButton from '@repo/ui/RepoButton';
import RepoInput from '@repo/ui/RepoInput';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <RepoButton
        onClick={() => {
          console.log('RepoButton clicked');
        }}
      >
        RepoButton
      </RepoButton>
      <RepoInput />
      <img src={'assets/shared/images/avatar copy.png'} alt="Avatar" />

      <Link href="/" className="text-cyan-400 text-2xl mx-auto mt-36">
        برو به صفحه اصلی
      </Link>
    </div>
  );
}
