import { BsFillCartFill,BsFillHouseFill,BsFillTelephoneFill,BsTextRight,BsHandbag } from "react-icons/bs"

import Image from "next/image"
import Link from "next/link"

const Cart = () => {
  return (
    <div className='cursor-pointer hidden md:flex'>
      <BsHandbag size={16} className=' mr-1 text-yellow-100' /> 
      <div className='rounded-full w-[18px] h-[18px] bg-yellow-100 text-pink-500 text-10 flex justify-center items-center'>0</div>
    </div>
  )
}

const Menu_sm = () => {
  return (
    <ul className="flex justify-between pt-[20px] items-center md:hidden">
      <li>
        <Link href='/'>
          <BsFillHouseFill size={20}/>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <BsFillCartFill size={20}/>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <BsFillTelephoneFill size={20}/>
        </Link>
      </li>
      <li className="text-yellow-200">
        <BsTextRight size={20}/>
      </li>
    </ul>
  )
}

const Menu_md_lg = () => {
  return (
    <nav className="text-14 font-euclidReqular justify-between w-full hidden md:flex">
      <Link href='/' className="hover:text-white">Home</Link>
      <Link href='/' className="hover:text-white">Contact Us</Link>
      <Link href='/' className="hover:text-white">T-shirt</Link>
      <Link href='/' className="hover:text-white">Shirt</Link>
      <Link href='/' className="hover:text-white">Pants</Link>
      <Link href='/' className="hover:text-white">Shoe</Link>
      <Link href='/' className="hover:text-white">Suggestions</Link>
      <Link href='/' className="hover:text-white">Latest products</Link>
    </nav>
  )
}

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-pink-200 w-full p-[30px] relative">
      <div className="pb-[15px] w-full border-b-[1px] border-pink-300 justify-between items-center md:flex lg:border-0 lg:pb-0">
        <Image width={40} height={40} src='/logo.svg' alt="uiminut" className="h-[40px]"/>
        <div className="hidden w-7/12 lg:block">
          <Menu_md_lg/>
        </div>
        <Cart/>
      </div>
      <div className="pt-[20px] lg:hidden">
        <Menu_md_lg/>
      </div>
      <Menu_sm/>
    </footer>
  )
}

export default Footer