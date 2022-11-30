import Link from "next/link"
const Button_Link = ({text,path}) => <Link href={path} className='h-[50px] w-full flex justify-center items-center bg-pruple-200 text-gray-400 font-robotoMedium text-14'>{text}</Link>

export default Button_Link