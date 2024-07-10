import { IconChevronRight } from '@tabler/icons-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'concept.',
}

export default function Home() {
  return (
    <main>
      <section className='flex items-center h-screen'>
        <video
          id='hero'
          src='/thumb.webm'
          disablePictureInPicture={true}
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          preload='metadata'
          className='absolute -z-10 w-full h-full object-cover brightness-[0.2]'
        />

        <div className='container px-28 space-y-12'>
          <div className='space-y-2'>
            <h3 className='text-3xl font-semibold'>Check out our latest arrivals</h3>
            <h1 className='text-7xl font-bold'>L-5 B Military Jxgger</h1>
          </div>

          <div>
            <button className='bg-white text-black rounded-lg font-semibold uppercase px-12 py-4 shadow-xl shadow-white/10 hover:shadow-primary/10 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all'>
              Shop now
            </button>
          </div>
        </div>
      </section>
      <section className='grid gap-4 lg:grid-cols-2 p-4'>
        <Link href='/tops' className='group h-[75vh] relative flex justify-center items-end'>
          <div className='overflow-hidden absolute size-full'>
            <img
              src='/products/l-6_b_tactical_puffer_jacket.jpg'
              alt='l-6_b_tactical_puffer_jacket'
              className='size-full object-cover object-center scale-125 transition-all duration-500 opacity-70 group-hover:opacity-50 group-hover:scale-150'
            />
          </div>
          <div className='z-10 mb-10 flex flex-col items-center space-y-4'>
            <h2 className='uppercase text-white font-medium text-3xl'>L-6 B Tactical Puffer Jacket</h2>
            <div className='bg-white rounded-md border-2 border-white text-black font-medium uppercase px-4 py-2 text-sm flex items-center space-x-1 backdrop-blur-md group-hover:bg-transparent group-hover:text-white transition-all'>
              <span>Explore tops</span>
              <span><IconChevronRight size={12} /></span>
            </div>
          </div>
        </Link>
        <Link href='/bottoms' className='group h-[75vh] relative flex justify-center items-end'>
          <div className='overflow-hidden absolute size-full'>
            <img
              src='/products/l-5_b_military_jxgger.jpg'
              alt='l-5_b_military_jxgger'
              className='size-full object-cover object-center scale-125 transition-all duration-500 opacity-70 group-hover:opacity-50 group-hover:scale-150'
            />
          </div>
          <div className='z-10 mb-10 flex flex-col items-center space-y-4'>
            <h2 className='uppercase text-white font-medium text-3xl'>L-5 B Military Jxgger</h2>
            <div className='bg-white rounded-md border-2 border-white text-black font-medium uppercase px-4 py-2 text-sm flex items-center space-x-1 backdrop-blur-md group-hover:bg-transparent group-hover:text-white transition-all'>
              <span>Explore bottoms</span>
              <span><IconChevronRight size={12} /></span>
            </div>
          </div>
        </Link>
      </section>
    </main>
  )
}
