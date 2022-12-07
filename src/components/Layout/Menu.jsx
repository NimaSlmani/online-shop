import { useSelector,useDispatch } from 'react-redux'

import { setOpen_sidebar } from '../../features/slices/style_slice'

import Button_Border from '../Buttons/Button_Border'

import Image from "next/image"
import Link from "next/link"


import {RiCloseLine} from 'react-icons/ri'

const Menu = () => {
  let {open_sidebar} = useSelector(state => state.style)
  let dispatch = useDispatch()

  console.log(open_sidebar);
  return (
    <div className={`w-full h-screen bg-gray-100 text-black-100 text-14 font-robotoReqular text-center flex flex-col justify-between items-center fixed z-40 pt-[40px] px-[55px] pb-[20px] transition-all ${open_sidebar ? 'right-0' : 'right-[100%]'}`}>
      <Image width={50} height={60} src='/logo-pruple.svg' alt='uiminut' />
      <div className="w-full">
        <nav className="flex flex-col w-full">
          <Link href='/' className="border-b-[1px] border-gray-300 pb-[20px] w-full">Home</Link>
          <Link href='/' className="border-b-[1px] border-gray-300 py-[20px] w-full">Contact Us</Link>
          <Link href='/' className="border-b-[1px] border-gray-300 py-[20px] w-full">T-Shirt</Link>
          <Link href='/' className="border-b-[1px] border-gray-300 py-[20px] w-full">Shirt</Link>
          <Link href='/' className="border-b-[1px] border-gray-300 py-[20px] w-full">Pants</Link>
          <Link href='/' className="border-b-[1px] border-gray-300 py-[20px] w-full">Shoe</Link>
          <Link href='/' className="border-b-[1px] border-gray-300 py-[20px] w-full">Suggestions</Link>
          <Link href='/' className="py-[20px] w-full">Latest Products</Link>
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