import Link from "next/link"

const Button_Link_Vertical = ({path,cls,text}) => <Link href={path} className={`${cls} verticalText bg-pruple-200 w-[50px] text-gray-400 flex justify-center items-center font-robotoMedium text-14`}>{text}</Link>

export default Button_Link_Vertical