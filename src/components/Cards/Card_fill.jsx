import Image from "next/image"
import Secondary_Title from '../Text/Secondary_Title'
import Operator_Button from '../Buttons/Operator_Button'

import {BsPlus} from 'react-icons/bs'
import {HiMinusSm} from 'react-icons/hi'
import {SlHeart} from 'react-icons/sl'

const Card_fill = ({imageSize}) => {
  return (
    <div className="bg-gray-200 pt-[40px] pb-[20px] px-[30px] flex flex-col items-center relative">
        <SlHeart size={25} className="text-pink-500 cursor-pointer transition-all hover:text-pruple-200 absolute top-[30px] right-[30px]"/>
        <div className={`w-[${imageSize}px] overflow-hidden`}>
            <Image alt="online shop" src='/product-1.png' width={160} height={180} className="w-full h-auto"/>
        </div>
        <Secondary_Title text='Beninos Mens Long Sleeve Slim Fit Dress Shirts' />
        <div className="flex justify-between w-full mt-[15px]">
            <Operator_Button Icon={BsPlus}/>
            <p className="text-18 font-robotoMedium text-pruple-200">Price : $40000</p>
            <Operator_Button Icon={HiMinusSm}/>
        </div>
    </div>
  )
}

export default Card_fill