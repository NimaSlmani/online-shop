import { useSelector } from "react-redux"
import {BsHandbag} from 'react-icons/bs'

import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

import Sing_in from "../sections/my-account/Sing_in"
import Sing_up from "../sections/my-account/Sing_up"
import Navbar from "../sections/my-account/Navbar"
import Menu from "../components/Layout/Menu"

const Cart = () => {
  return (
    <div className='flex cursor-pointer'>
      <BsHandbag size={16} className=' mr-1 text-pink-500 lg:text-yellow-200' /> 
      <div className='rounded-full w-[18px] h-[18px] bg-pink-500 text-gray-200 text-10 flex justify-center items-center lg:bg-yellow-100 lg:text-pink-400'>0</div>
    </div>
  )
}

const Header = () => {
  return(
    <header className="flex justify-between items-center relative z-10">
      <Link href="/">
        <Image src="/logo-pruple.svg" alt="logo my-shopping" width={200} height={350} className="w-[50px] md:w-[55px]"/>
      </Link>
      <Link href="/">
        <Cart/>
      </Link>
    </header>
  )
}

const Bg_Image = () => {
  return (
    <>
      <Image src="/images/login-register.png" width={1000} height={900} alt="image-shopping" className="absolute  max-w-[150%] left-[-25%] z-10 bottom-0 md:max-w-[100%] md:left-0 md:bottom-[-30px] lg:hidden" />
      <Image src="/images/login-register-desktop.png" width={1000} height={900} alt="image-shopping" className="hidden absolute h-screen z-10 object-cover top-0 right-[-120px] lg:block"/>
    </>
  )
}

const Bg_overlay = () => <div className="absolute w-full top-[130px] bottom-0 bg-white hidden left-0 lg:block"/>

const myAccount = () => {
  let {login_page_check} = useSelector(state=>state.style)

  return (
    <>
    <Menu/>
    <div className="p-[30px] min-h-screen bg-gray-200 myAccount-bg-image relative overflow-hidden md:px-[50px] md:pt-[40px] lg:px-[100px]">
      <Head>
          <link rel="icon" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="rgba(255,57,84,1)" />
          <title>login and register</title>
      </Head>
      <Bg_Image/>
      <Bg_overlay/>
      <Header/>
      {
        login_page_check ? <Sing_in/> : <Sing_up/>
      }
      <Navbar/>
    </div>
    </>
  )
}

export default myAccount