import Link from "next/link"
const Button_Link = ({text,path}) => <Link href={path} className='
                                                                    h-[50px] w-full flex justify-center items-center bg-pruple-200 text-gray-400 font-robotoMedium text-14 relative
                                                                    before:w-[20px] before:h-[20px] before:bg-pink-500 before:rounded-full before:absolute before:z-0 before:opacity-0 before:transition-all
                                                                    hover:before:w-full hover:before:h-full hover:before:opacity-100 hover:before:rounded-none

                                                                '><span className="z-20 relative">{text}</span></Link>

export default Button_Link