import { useDispatch } from "react-redux";
import { routesHomePage, routesPages } from "../../helperFunction/routes"
import { BsHouseFill,BsCartFill,BsTelephoneFill,BsTextRight } from "react-icons/bs";
import { setOpen_sidebar } from "../../features/slices/style_slice"

import Link from "next/link";

const Menu_sm = () => {
    let dispatch = useDispatch()

    return (
        <ul className="flex w-full h-full lg:hidden">
            <li className="w-3/12 h-full flex justify-center items-center">
                <Link href='/'><BsHouseFill size={18}/></Link>
            </li>
            <li className="w-3/12 h-full flex justify-center items-center">
                <Link href='/'><BsCartFill size={18}/></Link>
            </li>
            <li className="w-3/12 h-full flex justify-center items-center">
                <Link href='/'><BsTelephoneFill size={18}/></Link>
            </li>
            <li className="w-3/12 h-full flex justify-center items-center" onClick={()=>{
                console.log("object");
                dispatch(setOpen_sidebar(true))
            }}>
                <BsTextRight size={18}/>
            </li>
        </ul>
    )
}

const Menu_lg = () => {
    return(
        <ul className="hidden w-full h-full text-12 justify-between lg:flex lg:px-[20px]">
            {
                routesPages.map((route,index)=>
                    <li key={index}>
                        <Link className='h-full flex justify-center items-center relative before:content-[""] before:w-[3px] before:h-[3px] before:bg-white before:rounded-full before:absolute before:bottom-[-10px] before:transition-all before:opacity-0 hover:before:opacity-100 hover:before:bottom-[10px]' href={route.path}>{route.text}</Link>
                    </li>
                )
            }
        </ul>
    )
}

const Navbar = () => {
    return (
      <nav className="absolute w-full border-t-[1.5px] border-yellow-200 h-[60px] text-gray-300 bottom-0 z-20 left-0 bg-white/20 backdrop-blur-[3px] flex justify-between items-center lg:w-6/12 lg:border-[1.5px] lg:right-[100px] lg:left-auto lg:bottom-[70px] lg:bg-black-200/20 lg:text-white">
        <Menu_sm/>
        <Menu_lg/>
      </nav>
    )
}
export default Navbar;