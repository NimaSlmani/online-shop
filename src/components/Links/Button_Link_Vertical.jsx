import Link from "next/link"

const Button_Link_Vertical = ({path,cls,text}) => 
                                                <Link
                                                    href={path}
                                                    className={`${cls} verticalText bg-pruple-200 w-[50px] text-gray-400 flex justify-center items-center font-robotoMedium text-14 relative
                                                              before:absolute before:content-[''] before:w-[10px] before:h-[10px] before:bg-pink-500 before:rounded-full before:transition-all before:z-0 before:opacity-0
                                                              hover:before:w-full hover:before:h-full hover:before:opacity-100 hover:before:rounded-none
                                                              hover:text-white

                                                              `}
                                                    >
                                                        <span className="relative z-10">{text}</span>
                                                </Link>

export default Button_Link_Vertical