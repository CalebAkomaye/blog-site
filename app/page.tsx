import Image from 'next/image';
import Header from '@/components/Header';
export default function Home() {
  return (
    <body className='flex flex-col justify-center items-center bg-zinc-100'>
      <main className='max-w-screen-2xl mx-auto h-full w-full bg-zinc-50 flex flex-col px-4'>
        <Header />
      </main>
    </body>
  );
}
