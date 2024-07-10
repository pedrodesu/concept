import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'

import AmericanExpress from '../public/payments/american-express.svg'
import ApplePay from '../public/payments/apple-pay.svg'
import Diners from '../public/payments/diners.svg'
import Discover from '../public/payments/discover.svg'
import GooglePay from '../public/payments/google-pay.svg'
import Klarna from '../public/payments/klarna.svg'
import Mastercard from '../public/payments/mastercard.svg'
import PayPal from '../public/payments/paypal.svg'
import Visa from '../public/payments/visa.svg'

const FOOTER_SOCIALS = [[IconBrandInstagram, 'Instagram'], [IconBrandTwitter, 'Twitter'], [IconBrandFacebook, 'Facebook'], [IconBrandTiktok, 'Tiktok'], [IconBrandYoutube, 'YouTube']] as const
const PAYMENTS = [
  [AmericanExpress, 'american-express'],
  [ApplePay, 'apple-pay'],
  [Diners, 'diners'],
  [Discover, 'discover'],
  [GooglePay, 'google-pay'],
  [Klarna, 'klarna'],
  [Mastercard, 'mastercard'],
  [PayPal, 'paypal'],
  [Visa, 'visa']
]

export default function Footer() {
  return (
    <footer className='py-10'>
      <div className='container divide-y divide-primary'>
        <div className='flex items-center justify-between pb-8'>
          <ul className='flex space-x-4'>
            {
              FOOTER_SOCIALS.map(([S, id]) => (
                <li key={id}>
                  <S size={26} />
                </li>
              ))
            }
          </ul>
          <ul className='flex space-x-2'>
            {
              PAYMENTS.map(([P, id]) => (
                <li key={id}>
                  <P className='w-9 rounded-sm' />
                </li>
              ))
            }
          </ul>
        </div>
        <p className='pt-8 font-medium'>
          &copy; {new Date().getUTCFullYear()} | concept. Made with ❤️ by{' '}
          <a className='text-secondary' href="https://www.linkedin.com/in/pedronmferreira/">Pedro Ferreira</a>
        </p>
      </div>
    </footer>
  )
}
