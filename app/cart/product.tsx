'use client'

import { Listbox } from '@headlessui/react';
import { IconChevronDown } from '@tabler/icons-react';
import { useState } from 'react'

export interface IProduct {
  id: string,
  name: string,
  size: string,
  price: number,
  initial_amount: number
}

export default function Product(props: IProduct) {
  const [amount, setAmount] = useState(props.initial_amount);

  return (
    <>
      <img
        src={`/products/${props.id}.jpg`}
        alt={props.id}
        className='w-32 h-40 object-cover object-center rounded-md'
      />
      <div className='flex flex-col flex-1 justify-between my-1'>
        <div className='flex justify-between items-center'>
          <div>
            <div className='divide-primary divide-x font-medium'>
              <span className='pr-4'>{props.name}</span>
              <span className='pl-4'>{props.size}</span>
            </div>
            <p>$ {props.price.toFixed(2)}</p>
          </div>
          <Listbox as='div' className='relative' value={amount} onChange={setAmount}>
            {({ open }) => (
              <>
                <Listbox.Button className={`bg-primary ${open ? 'rounded-t-lg' : 'rounded-lg'} px-2 py-1.5 space-x-1 flex items-center text-sm w-full`}>
                  <span>{amount}</span>
                  <span><IconChevronDown size={16} /></span>
                </Listbox.Button>
                <Listbox.Options className='absolute top-8 left-0 w-full bg-primary z-10 rounded-b-lg px-2 pb-1.5 cursor-default'>
                  {
                    [...Array(10)].map((_v, i) => (
                      <Listbox.Option
                        key={i}
                        value={i + 1}
                      >
                        {i + 1}
                      </Listbox.Option>
                    ))
                  }
                </Listbox.Options>
              </>
            )}
          </Listbox>
        </div>
        <div className='text-sm space-y-4'>
          <div>
            <p className='uppercase font-medium'>Available</p>
            <span className='text-xs'>This item is in stock for immediate purchase</span>
          </div>
          <button className='underline uppercase font-medium'>Remove</button>
        </div>
      </div>
    </>
  )
}
