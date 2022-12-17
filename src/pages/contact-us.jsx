import { useState } from "react"

import Layout from "../components/Layout/Layout"
import Primary_Title from "../components/Text/Primary_Title"

import Link from "next/link"
import Image from "next/image"

import {BsTwitter,BsYoutube,BsInstagram,BsFillTelephoneFill,BsWhatsapp,BsTelegram} from "react-icons/bs"
import {FaEnvelopeOpenText} from "react-icons/fa"

import { routesPages } from "../helperFunction/routes"

const SocialMedia = () => <ul className="flex">
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

const Content = () => {
  let [media,setMedia] = useState([
    {
      icon : <BsFillTelephoneFill size={16}/>,
      text : 'Phonenumber : 09106942198',
      link : 'tel:+989106942198'
    },
    {
      icon : <BsWhatsapp size={16}/>,
      text : 'Message on WhatsApp',
      link : 'https://wa.me/+989106942198',
    },
    {
      icon : <BsTelegram size={16}/>,
      text : 'Message on Telegram',
      link : 'https://telegram.me/+989106942198',
    },
    {
      icon : <FaEnvelopeOpenText size={16}/>,
      text : 'Send an Email',
      link : 'mailto:minslmani554@gmail.com'
    }
  ])
  return(
    <div className="min-h-screen gradient-pink border-b-[1.5px] border-pink-400 pt-[150px] pb-[30px] px-[30px]  md:pb-[100px] md:px-[50px] md:pt-[250px] lg:pt-[250px] lg:pb-[200px]">
      <div className="items-center lg:flex">
        <SocialMedia/>
        <p className="text-pink-200 text-14 font-robotoReqular mt-[10px] lg:pl-[15px] lg:mt-[-1px]">
          Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure
          Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident
        </p>
      </div>
      <div className="contact-us-content-background w-full p-7 mt-3 md:p-10 lg:p-14 lg:flex lg:items-center">
        <Image className="hidden w-4/12 border-black-100/75 border-[2px] lg:block" alt="my-shopping" src="/images/contactus-image.jpg" width={400} height={400}/>
        <div className="w-full lg:w-8/12 lg:pl-[25px]">
        <Primary_Title text="Get in touch with us"/>
        <ul className="mt-[20px]">
          {
            media.map((item,index)=>
              <li key={index} className="mb-[20px] pl-[20px] transition-all duration-200 last:mb-0 hover:pl-[35px]">
                <Link href={item.link} className="flex items-center text-16">
                  <span className="w-[45px] h-[45px] rounded-full flex justify-center items-center border-[1px] border-black-100 mr-[10px]">
                    {item.icon}
                  </span>
                  {item.text}
                </Link>
              </li> 
            )
          }
        </ul>
        </div>
      </div>
    </div>
  )
} 

const contact = () => {
  return (
    
    <Layout title="contact us" routes={routesPages}>
      <Content/>
      {/* <div className="h-screen gradient-pink border-b-[1.5px] border-pink-400 pt-[150px] pb-[30px] px-[30px]  md:pb-[100px] md:px-[50px] md:pt-[250px] lg:pt-[200px] lg:pb-[70px]">
        <div className="items-center lg:flex">
          <SocialMedia/>
          <p className="text-pink-200 text-14 font-robotoReqular mt-[10px] lg:pl-[15px] lg:mt-[-1px]">
            Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure
            Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu Fugiat Nulla Pariatur. Excepteur Sint Occaecat Cupidatat Non Proident
          </p>
        </div>
        <div className="w-full mt-[15px] contactus-image p-[20px] text-black-200 h-fit">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div> */}
    </Layout>
  )
}

export default contact