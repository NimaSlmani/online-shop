import {useLayoutEffect, useState,useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation } from 'swiper';

import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'

import Container from '../../components/Container'
import Primary_Title from '../../components/Text/Primary_Title'
import Button_Link from '../../components/Links/Button_Link'
import Card_fill from '../../components/Cards/Card_fill'

import Image from 'next/image';

const Pattern = () => <Image src='/patterns/gray.svg' alt='uiminut' width={300} height={400} className="w-[450px] absolute right-[0px] bottom-[-140px] hidden lg:block"/>

const Latest_products = () => {
    let navigationPrevRef = useRef(null)
    let navigationNextRef = useRef(null)
    let [slide,setSlide] = useState(1)
    SwiperCore.use([Autoplay]);
    useLayoutEffect(()=>{
        if(window.innerWidth >= 992 && window.innerWidth <= 1024 || window.innerWidth >= 1366){
            setSlide(3)  
        }else if(window.innerWidth <=640){
            setSlide(1)
        }else if(window.innerWidth >= 1024 && window.innerWidth <= 1366){
            setSlide(2)
        }else if(window.innerWidth >=640 && window.innerWidth <=992){
            setSlide(2)
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
      <Container bg='bg-gray-100' pId='Lates-products'>
          <Pattern/>
          <div className='lg:flex lg:flex-row-reverse'>
              {/* content-text */}
              <div className='w-full mb-[20px] lg:mb-0 lg:w-5/12 lg:pl-[30px] lg:pt-[20px]'>
                <div className='mb-[20px]'>
                    <Primary_Title text='Latest Products'/>
                    <p className='text-14 text-black-100 font-robotoReqular'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad.</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div className='mr-[15px] arrow_button' ref={navigationNextRef}><BsChevronLeft/></div>
                        <div className='arrow_button' ref={navigationPrevRef}><BsChevronRight/></div>
                    </div>
                    <div className='w-5/12 md:w-[150px]'>
                        <Button_Link path='/' text='All Products'/>
                    </div>
                </div>
              </div>
              {/* slider */}
              <div className='w-full h-full lg:w-7/12'>
                    <Swiper 
                        modules={[Navigation]} {...params}
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current,
                        }}
                    >
                        <SwiperSlide>
                            <Card_fill type='dress' src='/product-1.png' imageSize='160'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card_fill type='dress' src='/product-1.png' imageSize='160'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card_fill type='dress' src='/product-1.png' imageSize='160'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card_fill type='dress' src='/product-1.png' imageSize='160'/>
                        </SwiperSlide>
                    </Swiper>
              </div>
          </div>
      </Container>
    )
}

export default Latest_products