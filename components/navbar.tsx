'use client'

import { Popover, Transition } from '@headlessui/react'
import { IconMenu2, IconSearch, IconShoppingBag, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, forwardRef, useEffect, useState } from 'react'

const Overlay = forwardRef<HTMLDivElement>((props, ref) => (
  <Popover.Overlay className='fixed opacity-50 h-screen backdrop-blur-md inset-0 bg-black' ref={ref} {...props} />
))

export default function Navbar() {
  const [isHeroMode, setHeroMode] = useState(true)
  const pathname = usePathname()

  const isRoot = pathname === '/'

  function scrollPredicate() {
    setHeroMode(window.scrollY === 0)
  }

  useEffect(() => {
    scrollPredicate()
    document.addEventListener('scroll', scrollPredicate)

    return () => {
      document.removeEventListener('scroll', scrollPredicate)
    }
  })

  return (
    <nav className={`${isRoot ? isHeroMode ? 'fixed' : 'fixed backdrop-blur shadow-lg' : 'sticky backdrop-blur shadow-lg'} py-6 z-20 top-0 w-full transition-all`}>
      <div className={`${isRoot && isHeroMode ? 'px-28 my-12' : ''} container flex justify-between transition-all`}>
        <Link href='/' className='text-2xl font-semibold'>
          concept.
        </Link>

        <ul className='flex items-center font-medium space-x-8'>
          <li>
            <IconSearch />
          </li>
          <li className='relative after:content-["6"] after:flex after:text-xs after:w-5 after:h-5 after:items-center after:justify-center after:rounded-lg after:bg-secondary after:absolute after:-top-2 after:-right-2'>
            <Link href='/cart'>
              <IconShoppingBag />
            </Link>
          </li>
          <li>
            <Popover>
              <Popover.Button className='flex'>
                <IconMenu2 />
              </Popover.Button>

              <Transition>
                <Transition.Child
                  as={Overlay}
                  beforeEnter={() => {
                    document.body.classList.add('overflow-x-hidden')
                    document.body.classList.add('overflow-y-hidden')
                  }}
                  afterLeave={() => {
                    document.body.classList.remove('overflow-y-hidden')
                    document.body.classList.remove('overflow-x-hidden')
                  }}
                  enter="transition-all duration-700"
                  enterFrom="opacity-0 backdrop-blur-none"
                  enterTo="opacity-50 backdrop-blur-md"
                  leave="transition-all duration-500"
                  leaveFrom="opacity-50 backdrop-blur-md"
                  leaveTo="opacity-0 backdrop-blur-none"
                />

                <Transition.Child
                  as={Fragment}
                  enter='transition-all duration-300 ease-out'
                  enterFrom='right-[-30rem]'
                  enterTo='right-0'
                  leave='transition-all duration-300 ease-in'
                  leaveFrom='right-0'
                  leaveTo='right-[-30rem]'
                >
                  <Popover.Panel className='absolute top-0 right-0 bg-black h-screen w-[30rem]'>
                    <Popover.Button className='m-10 float-right'>
                      <IconX />
                    </Popover.Button>

                    <ul className='ml-20 mt-28 space-y-6 text-xl font-medium uppercase'>
                      <li>
                        <Link href='/tops'>
                          Tops
                        </Link>
                      </li>
                      <li>
                        <Link href='/bottoms'>
                          Bottoms
                        </Link>
                      </li>
                    </ul>
                  </Popover.Panel>
                </Transition.Child>
              </Transition>
            </Popover>
          </li>
        </ul>
      </div>
    </nav >
  )
}

// TODO blur overlay backdrop
