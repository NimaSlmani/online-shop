import Image from "next/image"
import Secondary_Title from '../Text/Secondary_Title'
import Operator_Button from '../Buttons/Operator_Button'

import {BsPlus} from 'react-icons/bs'
import {HiMinusSm} from 'react-icons/hi'
import {SlHeart} from 'react-icons/sl'

const Card_fill = ({imageSize,src,type,icon}) => {
  return (
    <div className={`bg-gray-200 ${type === 'dress' ? 'pt-[40px]' : 'pt-[60px]'} pb-[20px] px-[30px] flex flex-col items-center relative min-h-full justify-between`}>
        {
          icon &&
          <Image src={icon} alt="uiminut" width={30} height={30} className='absolute top-[30px] left-[30px] w-[20px]'/>          
        }
        <SlHeart size={20} className="text-pink-500 cursor-pointer transition-all hover:text-pruple-200 absolute top-[30px] right-[30px]"/>
        <div className={`w-[${imageSize}px] overflow-hidden`}>
            <Image alt="online shop" src={src} width={140} height={180} className="w-full h-auto"/>
        </div>
        <div className="w-full">
          <Secondary_Title text='Adilette Clogs' cls='text-black-200' />
          <div className="flex justify-between w-full mt-[15px]">
              <Operator_Button Icon={BsPlus}/>
              <p className="text-18 font-robotoMedium text-pruple-200">Price : $40000</p>
              <Operator_Button Icon={HiMinusSm}/>
          </div>
        </div>
    </div>
  )
}

export default Card_fill