import {BsTextRight,BsHandbag} from 'react-icons/bs'
import {FiHeart,FiUser} from 'react-icons/fi'

import Image from "next/image"
import Link from 'next/link'

const Cart = () => {
  return (
    <div className='flex cursor-pointer'>
      <BsHandbag size={16} className=' mr-1 text-yellow-100' /> 
      <div className='rounded-full w-[18px] h-[18px] bg-yellow-100 text-pink-500 text-10 flex justify-center items-center'>0</div>
    </div>
  )
}

const User_link = () => {
  return (
    <div className='flex text-yellow-100'>
      <Link href='/'>
        <FiHeart size={18} className='mr-[5px] hover:text-gray-100'/>
      </Link>
      <FiUser size={18} className='hover:text-gray-100 cursor-pointer'/>
    </div>
  )
}

const Header_sm = () => {
  return (
    <div className='flex justify-between items-center border-b-[1px] border-pink-300 pb-[15px] md:hidden'>
      <Image width={40} height={40} src='/logo.svg' />
      <BsTextRight className='text-yellow-200' size={20}/>
    </div>
  )
}

const Header_nav = () => {
  return (
    <div className='border-b-[1px] border-pink-300 pt-5 pb-2 lg:flex lg:justify-between'>
      <div className='hidden lg:block'>
        <Cart/>
      </div>
      <nav className='text-14 lg:w-7/12'>
        <ul className='flex text-pink-200 justify-between'>
          <li>
            <Link href='/' className='hover:text-gray-100'>Home</Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-100'>Contact Us</Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-100'>T-shirt</Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-100'>Shirt</Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-100'>Pants</Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-100'>Shoe</Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-100'>Suggestions</Link>
          </li>
          <li>
            <Link href='/' className='hover:text-gray-100'>Latest products</Link>
          </li>
        </ul>
      </nav>
      <div className='hidden lg:block'>
        <User_link/>
      </div>
    </div>
  )
}

const Header_md_lg = () => {
  return (
    <div className='hidden md:block'>
      <div className='flex justify-between items-center lg:justify-center'>
        <div className='lg:hidden'><Cart/></div>
        <Image width={55} height={55} src='/logo.svg' />
        <div className='lg:hidden'><User_link/></div>
      </div>
      <Header_nav/>
    </div>
  )
}

const Header = () => {
  return (
    <header className="absolute z-10 w-full px-[30px] pt-[30px] md:px-[50px] md:pt-[40px] lg:px-[100px]">
      <Header_sm/>
      <Header_md_lg/>
    </header>
  )
}

export default Header