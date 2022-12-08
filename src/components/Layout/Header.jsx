import { useDispatch } from 'react-redux'
import { setOpen_sidebar } from '../../features/slices/style_slice'

import {BsTextRight,BsHandbag} from 'react-icons/bs'
import {FiHeart,FiUser} from 'react-icons/fi'

import Image from "next/image"
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll'
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
  let dispatch = useDispatch()

  return (
    <div className='flex justify-between items-center border-b-[1px] border-pink-300 pb-[15px] md:hidden'>
      <Image width={40} height={40} src='/logo.svg' alt='uiminut' />
      <BsTextRight className='text-yellow-200' size={20} onClick={()=>dispatch(setOpen_sidebar(true))}/>
    </div>
  )
}

const Header_nav = () => {
  return (
    <div className='border-b-[1px] border-pink-300 pt-5 pb-2 lg:flex lg:justify-between'>
      <div className='hidden lg:block'>
        <Cart/>
      </div>
      <nav className='text-14 lg:w-8/12'>
        <ul className='flex text-pink-200 justify-between'>
          <li>
            <Link href='/' className='hover:text-gray-100'>Home</Link>
          </li>
          <li>
            <Link href='/contact-us' className='hover:text-gray-100'>Contact Us</Link>
          </li>
          <li>
            <ScrollLink to='Shirts' offset={100} smooth={true} className='hover:text-gray-100 cursor-pointer'>T-shirt</ScrollLink>
          </li>
          <li>
            <ScrollLink to='Shirts' offset={100} smooth={true} className='hover:text-gray-100 cursor-pointer'>Shirt</ScrollLink>
          </li>
          <li>
            <ScrollLink to='Offers' smooth={true} offset={100}  className='hover:text-gray-100 cursor-pointer'>Discounted products</ScrollLink>
          </li>
          <li>
            <ScrollLink to='Shoes' smooth={true} className='hover:text-gray-100 cursor-pointer'>Shoes</ScrollLink>
          </li>
          <li>
            <ScrollLink to='Suggested-products' smooth={true} offset={100} className='hover:text-gray-100 cursor-pointer'>Suggestions</ScrollLink>
          </li>
          <li>
            <ScrollLink to='Lates-products' offset={50} smooth={true} className='hover:text-gray-100 cursor-pointer'>Latest products</ScrollLink>
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
        <Image width={55} height={55} src='/logo.svg' alt='uiminut' />
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