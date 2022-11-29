import {BsTwitter,BsYoutube,BsInstagram,BsFillPlayFill} from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"

const Screen_Overlay = () => <div className="overlay_screen"></div>

const Screen_Image = () => <div className="hidden w-3/12 h-full lg:block">
                            <Image src="/images/modeling-2.jpg" width={500} height={500} alt="shopping" className="w-full h-full object-cover	" />
                        </div>

const Screen_Container = ({children}) => <div className="absolute w-full h-full  pt-[150px] pb-[30px] px-[30px]  md:pb-[100px] md:px-[50px] md:pt-[250px] lg:pt-[200px] lg:flex">{children}</div>

const Screen_SocialMedia = () => <ul className="flex">
                                    <li>
                                      <Link href='/' className="social-media"><BsInstagram/></Link>
                                    </li>
                                    <li className="mx-[15px]">
                                      <Link href='/' className="social-media"><BsTwitter/></Link>
                                    </li>
                                    <li>
                                      <Link href='/' className="social-media"><BsYoutube/></Link>
                                    </li>
                                  </ul>
                                  
const Screen_Content = () => <div className="w-full h-full flex flex-col justify-between lg:w-9/12 lg:pl-10">
                                <div className="text-center md:text-left lg:pt-5">
                                  <h1 className="relative text-gray-200 text-30 font-euclidBold md:text-45 lg:text-50 lg:pl-[15px] md:leading-[55px]">
                                    <div className="hidden absolute w-[5px] h-full bg-gray-200 left-0 md:block"/>
                                    Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat
                                  </h1>
                                  <p className="text-pink-200 text-14 font-robotoReqular md:mt-3">
                                    Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure
                                    Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident
                                  </p>
                                </div>
                                <div className="flex justify-between">
                                  <Screen_SocialMedia/>
                                  <div className="flex items-center">
                                    <div className="social-media border-pink-400 text-pink-200">
                                      <BsFillPlayFill size={22}/>
                                    </div>
                                    <div className="border-b ml-4 border-pink-400 w-[150px] hidden md:block"/>
                                  </div>
                                </div>
                              </div>

const Screen = () => {
  return (
    <div className="screenContainer">
        <Screen_Overlay/>
        <Screen_Container>
          <Screen_Image/>
          <Screen_Content/>
        </Screen_Container>
    </div>
  )
}

export default Screen