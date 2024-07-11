import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='flex justify-between align-middle gap-4 py-12 pt-5 px-12 text-base'>
      <div className='flex gap-8'>
        <Link href={'/collections'}>Collections</Link>
        <Link href={'/collections'}>Most Popular</Link>
      </div>
      <div>REBUNI</div>
      <div className='flex justify-between items-center gap-8'>
        <Link href={'/collections'}>My account</Link>
        <Link href={'/collections'}>My cart</Link>
        <CiSearch className=' cursor-pointer px-4 py-4 bg-zinc-900 text-gray-100' />
      </div>
    </header>
  );
}
