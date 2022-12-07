import {useLayoutEffect, useState,useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ EffectCards,Autoplay } from "swiper";

import {BsChevronRight,BsChevronLeft} from 'react-icons/bs'

import Container from "../../components/Container"
import Card_fill from '../../components/Cards/Card_fill';
import Button_Link from '../../components/Links/Button_Link';

const Section = () => {
  let navigationPrevRef = useRef(null)
  let navigationNextRef = useRef(null)
  SwiperCore.use([Autoplay,EffectCards]);
  const params = {
    loop : true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true
    }
  }
  return (
    <div className='flex flex-col items-center'>
      <h3 className='text-35 text-center font-euclidBold leading-[45px] md:text-40'>Special Sale Of Men&apos;s Shirts</h3>
      <Swiper
         effect={"cards"}
         grabCursor={true}
         modules={[EffectCards]}
         {...params}
         navigation={{
             prevEl: navigationPrevRef.current,
             nextEl: navigationNextRef.current,
         }}
        className='pt-[20px] w-9/12 md:w-5/12 lg:w-6/12'>
          <SwiperSlide>
            <Card_fill type='dress' src='/product-1.png' imageSize='130'/>
          </SwiperSlide>
          <SwiperSlide>
            <Card_fill type='dress' src='/product-1.png' imageSize='130'/>
          </SwiperSlide>
          <SwiperSlide>
            <Card_fill type='dress' src='/product-1.png' imageSize='130'/>
          </SwiperSlide>
          <SwiperSlide>
            <Card_fill type='dress' src='/product-1.png' imageSize='130'/>
          </SwiperSlide>
      </Swiper>
      <div className='w-full flex justify-between pt-[20px]'>
        <div className='flex'>
          <div className='mr-[15px] arrow_button' ref={navigationPrevRef}><BsChevronLeft/></div>
          <div className='arrow_button' ref={navigationNextRef}><BsChevronRight/></div>
        </div>
        <div className='w-[150px]'><Button_Link path='/' text='All Products'/></div>
      </div>
    </div>
  )
}

const Shirts = () => {

  return (
    <Container bg='gradient_white_yellow' pId='Shirts'>
        <div className='lg:flex'>
          <div className='pb-[100px] md:pb-[150px] lg:pb-0 lg:w-6/12 lg:pr-[50px]'><Section/></div>
          <div className='pt-[100px] md:pt-[150px] lg:pt-0 lg:w-6/12 lg:pl-[50px]'><Section/></div>
        </div>
    </Container>
  )
}

export default Shirts