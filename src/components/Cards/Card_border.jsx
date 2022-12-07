import Secondary_Title from "../Text/Secondary_Title"
import Operator_Button from "../Buttons/Operator_Button"


import {SlHeart} from 'react-icons/sl'
import {BsPlus} from 'react-icons/bs'
import {HiMinusSm} from 'react-icons/hi'

import Image from "next/image"

const Card_border = ({src}) => {
  return (
    <div className="card-border">
      <div className="bg-gray-400 flex justify-center items-center w-full h-[250px] relative z-10">
        <SlHeart size={20} className="text-pink-500 cursor-pointer transition-all hover:text-pruple-200 absolute top-[20px] right-[20px]"/>
        <Image src={src} width={200} height={250} alt='uiminut' className="w-[130px]"/>
      </div>
      <Secondary_Title cls='z-10 relative text-blue-200' text='Beninos Mens Long Sleeve Slim Fit Dress Shirts'/>
      <div className="overlay-card-border">
        <div className="flex items-center justify-between p-[20px] w-full">
          <Operator_Button Icon={BsPlus}/>
          <p className="text-18 font-robotoMedium text-pruple-200">Price : $4000</p>
          <Operator_Button Icon={HiMinusSm}/>
        </div>
      </div>
    </div>
  )
}

export default Card_border