import {useLayoutEffect, useState,useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation } from 'swiper';

import Container from '../../components/Container'
import Card_border from '../../components/Cards/Card_border'
import Image from 'next/image'

import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'
const Suggested_products = () => {
  let navigationPrevRef = useRef(null)
  let navigationNextRef = useRef(null)
  let [slide,setSlide] = useState(1)
  SwiperCore.use([Autoplay]);
  useLayoutEffect(()=>{
    if(window.innerWidth <=640){
        setSlide(1)
    }else if(window.innerWidth >=640 && window.innerWidth <=768){
        setSlide(2)
    }else if(window.innerWidth >=768 && window.innerWidth <=1024){
        setSlide(3)
    }else if(window.innerWidth >=1024 && window.innerWidth <=1400){
        setSlide(4)
    }else{
        setSlide(5) 
    }
  },[])
  let params = {
      spaceBetween: 30,
      slidesPerView:slide,
      loop : true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      }
  }
  return (
    <Container pId='Suggested-products'>
        <Image src='/images/bg-image.png' width={900}  height={900} className='bg-red-500 w-full h-full absolute left-0 top-0 z-0' alt='uiminut'/>
        <div className='w-full h-full absolute left-0 top-0 z-0 bg-pruple-100'/>
        <div className='text-center pb-[30px] z-20 relative'
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
        >
            <h2 className='text-30 leading-[34px] font-euclidBold text-gray-500 md:text-40 md:leading-[45px]'>This Month&apos;s Recommended Products</h2>
            <p className='text-14 font-robotoReqular text-gray-400'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad.</p>
        </div>
        <Swiper
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="800"
            className='w-full'
            modules={[Navigation]} {...params}
            
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
        >
              <SwiperSlide>
                  <Card_border src='/product-1.png'/>
              </SwiperSlide>
              <SwiperSlide>
                  <Card_border src='/product-1.png'/>
              </SwiperSlide>
              <SwiperSlide>
                  <Card_border src='/product-1.png'/>
              </SwiperSlide>
              <SwiperSlide>
                  <Card_border src='/product-1.png'/>
              </SwiperSlide>
        </Swiper>
        <div className='flex justify-center pt-[50px]'>
            <div ref={navigationPrevRef} className='mr-[15px] arrow_button_yellow'><BsChevronLeft/></div>
            <div ref={navigationNextRef} className='arrow_button_yellow'><BsChevronRight/></div>
        </div>
    </Container>
  )
}

export default Suggested_products
