import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { setOpen_sidebar } from '../../features/slices/style_slice'

import {BsTextRight,BsHandbag} from 'react-icons/bs'
import {FiHeart,FiUser} from 'react-icons/fi'

import Image from "next/image"
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll'
import { useState } from 'react'
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
      <Link href='/my-account'>
        <FiUser size={18} className='hover:text-gray-100 cursor-pointer'/>
      </Link>
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

const Header_nav = ({routes}) => {
  let router = useRouter()
  
  return (
    <div className='border-b-[1px] border-pink-300 pt-5 pb-2 lg:flex lg:justify-between'>
      <div className='hidden lg:block'>
        <Cart/>
      </div>
      <nav className='text-14 lg:w-8/12'>
        <ul className='flex text-pink-200 justify-between'>
          {
            router.pathname === "/" ?
            <>
              <li>
                <Link href='/' className='hover:text-gray-100'>Home</Link>
              </li>
              <li>
                <Link href='/contact-us' className='hover:text-gray-100'>Contact Us</Link>
              </li>
            </>
            :
            null
          }
          {
            routes.map((route,index)=>
            router.pathname === "/" ?
            <li key={index}>
              <ScrollLink to={route.path} offset={route.offset} smooth={true} className='hover:text-gray-100 cursor-pointer'>{route.text}</ScrollLink>
            </li> 
            :
            <li key={index}>
              <Link className='hover:text-gray-100 cursor-pointer' href={route.path}>{route.text}</Link>
            </li>
            )
          }
        </ul>
      </nav>
      <div className='hidden lg:block'>
        <User_link/>
      </div>
    </div>
  )
}

const Header_md_lg = ({routes}) => {
  return (
    <div className='hidden md:block'>
      <div className='flex justify-between items-center lg:justify-center'>
        <div className='lg:hidden'><Cart/></div>
        <Image width={55} height={55} src='/logo.svg' alt='uiminut' />
        <div className='lg:hidden'><User_link/></div>
      </div>
      <Header_nav routes={routes}/>
    </div>
  )
}

const Header = ({routes}) => {
  return (
    <header className="absolute z-10 w-full px-[30px] pt-[30px] md:px-[50px] md:pt-[40px] lg:px-[100px]">
      <Header_sm/>
      <Header_md_lg routes={routes}/>
    </header>
  )
}

export default Header