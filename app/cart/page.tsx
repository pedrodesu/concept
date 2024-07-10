import type { Metadata } from 'next'
import Product from './product'
import type { IProduct } from './product'

export const metadata: Metadata = {
  title: 'Cart | concept.',
}

const PRODUCTS: IProduct[] = [
  { id: 'l-5_b_military_jxgger', name: 'L-5 B Military Jxgger', size: 'XL', price: 162.00, initial_amount: 1 },
  { id: 'l-4_a_camo_utility_bxmber', name: 'L-4 A Camo Utility Bxmber', size: 'L', price: 258.00, initial_amount: 2 },
  { id: 'l-6_b_tactical_puffer_jacket', name: 'L-6 B Tactical Puffer Jacket', size: 'XXL', price: 258.00, initial_amount: 1 }
]

export default function Cart() {
  return (
    <main>
      <div className='container'>
        <h2 className='text-4xl font-semibold'>Cart</h2>

        <div className='grid grid-cols-5 gap-20'>
          <ul className='col-span-3 divide-primary divide-y leading-relaxed'>
            {
              PRODUCTS.map(p => (
                <li key={p.id} className='flex space-x-8 py-12'>
                  <Product {...p} />
                </li>
              ))
            }
          </ul>
          <section className='col-span-2'>
            <div className='sticky px-8 py-16 rounded-md top-8 space-y-6 text-sm'>
              <p className='font-semibold uppercase text-base'>Order summary</p>
              <dl className='space-y-4'>
                <div className='flex'>
                  <dt className='flex-1'>Subtotal</dt>
                  <dd>$ 568.00</dd>
                </div>
                <div className='flex'>
                  <dt className='flex-1'>Shipping</dt>
                  <dd>$ 10.00</dd>
                </div>
                <div className='flex text-lg'>
                  <dt className='flex-1'>Order total</dt>
                  <dd>$ 420.69</dd>
                </div>
              </dl>
              <button className='w-full rounded-lg py-3 bg-primary font-semibold uppercase'>Checkout</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

// TODO create new component, control state
// also add redux and actually make shit functional (later on, with product pages working)
