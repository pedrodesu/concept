import { RadioGroup } from '@headlessui/react'
import { IconHeart, IconStar, IconStarFilled } from '@tabler/icons-react'
import type { Metadata } from 'next'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'L-6 B Tactical Puffer Jacket | concept.'
}

const SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL']

/*
function Sizes() {
  const [size, setSize] = useState(SIZES[2])

  return (
    <RadioGroup value={size} onChange={setSize}>
      <RadioGroup.Label>Plan</RadioGroup.Label>
      <RadioGroup.Option value="startup">
        {({ checked }) => (
          <span className={checked ? 'bg-blue-200' : ''}>Startup</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="business">
        {({ checked }) => (
          <span className={checked ? 'bg-blue-200' : ''}>Business</span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option value="enterprise">
        {({ checked }) => (
          <span className={checked ? 'bg-blue-200' : ''}>Enterprise</span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  )
}
*/

export default function Cart() {
  return (
    <main className='container'>
      <section className='grid gap-16 lg:grid-cols-2'>
        <div>
          <img
            src='/products/l-5_b_military_jxgger.jpg'
            alt='l-5_b_military_jxgger'
            className='rounded-lg'
          />
        </div>
        <div className='space-y-3'>
          <h2 className='flex justify-between text-2xl font-medium'>
            <span>L-6 B Tactical Puffer Jacket</span>
            <span>$ 258.00</span>
          </h2>
          <div className='flex items-center space-x-2'>
            <span className='text-sm'>4</span>
            <ul className='flex space-x-0.5'>
              {
                [...Array(4)].map((_v, i) => (
                  <li key={i}>
                    <IconStarFilled size={18} className='text-white' />
                  </li>
                ))
              }
              {
                [...Array(1)].map((_v, i) => (
                  <li key={i}>
                    <IconStarFilled size={18} className='text-secondary' />
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='py-2'>
            <h2 className='text-lg mb-2 font-semibold'>Size</h2>
            <ul className='grid grid-cols-7 gap-2'>
              {
                SIZES.map(s => (
                  <li key={s} className='border border-primary py-3 rounded-md flex items-center justify-center'>
                    <span>{s}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='flex items-center space-x-4'>
            <button className='rounded-lg px-10 py-3 bg-primary text-sm font-semibold uppercase'>Add to Cart</button>
            <span>
              <IconHeart size={30} className='text-[#505050]' />
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
