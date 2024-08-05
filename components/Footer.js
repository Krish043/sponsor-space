import React from 'react'
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white flex flex-col justify-center items-center px-4 h-28 gap-5 '>
      <ul className='flex items-center justify-around w-[100%]'>
      <Link href={"/TermsAndConditions"}>
          <li>Terms and Conditions</li>
        </Link>
      <Link href={"/PrivacyPolicy"}>
        <li>Privacy Policy</li>
      </Link>
      <Link href={"/ShippingPolicy"}>
        <li>Shipping Policy</li>
      </Link>
      <Link href={"/ContactUs"}>
        <li>Contact Us</li>
      </Link>
      <Link href={"/CancellationRefund"}>
        <li>Cancellation and Refunds</li>
      </Link>
      </ul>
      <p className='text-center'> copyright &copy; Sponsor Space - All rights reserved! </p>
    </footer>
  )
}

export default Footer
