import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setOpen_sidebar } from '../../features/slices/style_slice'
import {Link as ScrollLink} from 'react-scroll'
import { routesHomePage,routesPages } from '../../helperFunction/routes'
import Button_Border from '../Buttons/Button_Border'

import Image from "next/image"
import Link from "next/link"


import {RiCloseLine} from 'react-icons/ri'

const Menu = () => {
  let {open_sidebar} = useSelector(state => state.style)
  let dispatch = useDispatch()
  let [routes,setRoutes] = useState(false)

  return (
    <div className={`w-full h-screen bg-gray-100 text-black-100 text-14 font-robotoReqular text-center flex flex-col justify-between items-center fixed z-40 pt-[40px] px-[55px] pb-[20px] transition-all ${open_sidebar ? 'right-0' : 'right-[100%]'}`}>
      <Image width={50} height={60} src='/logo-pruple.svg' alt='uiminut' />
      <div className="w-full">
        <nav className="flex flex-col w-full">
          {
            routes ? 
              <>
                <Link href='/' onClick={()=>dispatch(setOpen_sidebar(false))} className="border-b-[1px] border-gray-300 pb-[20px] w-full">Home</Link>
                <Link href='/' onClick={()=>dispatch(setOpen_sidebar(false))} className="border-b-[1px] border-gray-300 py-[20px] w-full">Contact Us</Link>
                {
                  routesHomePage.map((route,index)=>
                    <ScrollLink key={index} to={route.path} offset={route.offset} onClick={()=>dispatch(setOpen_sidebar(false))} className="border-b-[1px] border-gray-300 py-[20px] w-full">{route.text}</ScrollLink>        
                  )
                }
                <Link href='/my-account' onClick={()=>dispatch(setOpen_sidebar(false))} className="border-b-[1px] border-gray-300 py-[20px] w-full">My Account</Link>
                <Link href='/' onClick={()=>dispatch(setOpen_sidebar(false))} className='py-[20px] w-full'>View shopping cart</Link>
              </>
            :
              <>
                {
                  routesPages.map((route,index)=>
                    <Link href={route.path} key={index} onClick={()=>dispatch(setOpen_sidebar(false))} className="border-b-[1px] border-gray-300 py-[20px] w-full">{route.text}</Link>
                  )
                }
                <Link href='/my-account' onClick={()=>dispatch(setOpen_sidebar(false))} className="border-b-[1px] border-gray-300 py-[20px] w-full">My Account</Link>
                <Link href='/' onClick={()=>dispatch(setOpen_sidebar(false))} className='py-[20px] w-full'>View shopping cart</Link>
              </>
          }
        </nav>
        <Button_Border
          click={()=>dispatch(setOpen_sidebar(false))}
        >
          <div className='flex items-center'>
            <RiCloseLine size={20} className='mr-[5px]'/>Close
          </div>
        </Button_Border>
      </div>
    </div>
  )
}

export default Menu