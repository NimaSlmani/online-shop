import {useLayoutEffect, useState,useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation } from 'swiper';

import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'

import Container from '../../components/Container'
import Primary_Title from '../../components/Text/Primary_Title'
import Button_Link from '../../components/Links/Button_Link'
import Card_fill from '../../components/Cards/Card_fill'

import Image from 'next/image';

const Pattern = () => <Image src='/patterns/gray.svg' alt='uiminut' width={300} height={400} className="w-[450px] absolute left-[0px] bottom-[-350px] hidden lg:block"/>


const Shoes = () => {
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
    <Container pId='Shoes'>
        <Pattern/>
        <div className='lg:flex lg:items-stretch'>
            {/* content-text */}
            <div className='w-full mb-[20px] lg:mb-0 lg:w-5/12 lg:pr-[30px]'
                data-aos="fade-right"
                data-aos-easing="linear"
                data-aos-duration="500"
            >
                <div className='mb-[20px]'>
                    <Primary_Title text='All Kinds Of Shoes And Linen'/>
                    <h4 className='text-14 font-robotoMedium text-pink-500'>Brands :</h4>
                    <ul className='font-robotoReqular text-12'>
                        <li className="flex items-center relative pl-[6px] before:content-[''] before:left-0 before:bg-black-100 before:h-[1px] before:w-[3px] before:absolute">Cotton Types With Puma Brand</li>
                        <li className="flex items-center relative pl-[6px] before:content-[''] before:left-0 before:bg-black-100 before:h-[1px] before:w-[3px] before:absolute">Cotton Types With Puma Brand</li>
                        <li className="flex items-center relative pl-[6px] before:content-[''] before:left-0 before:bg-black-100 before:h-[1px] before:w-[3px] before:absolute">Cotton Types With Puma Brand</li>
                        <li className="flex items-center relative pl-[6px] before:content-[''] before:left-0 before:bg-black-100 before:h-[1px] before:w-[3px] before:absolute">Cotton Types With Puma Brand</li>
                    </ul>
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
            <div className='w-full lg:w-7/12'
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="800"
            >
                <Swiper 
                    className='h-full'
                    modules={[Navigation]} {...params}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                >
                    <SwiperSlide>
                        <Card_fill icon='/images/adidas.svg' src='/shoes.png' imageSize='240'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card_fill icon='/images/adidas.svg' src='/shoes.png' imageSize='240'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card_fill icon='/images/adidas.svg' src='/shoes.png' imageSize='240'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card_fill icon='/images/adidas.svg' src='/shoes.png' imageSize='240'/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </Container>
  )
}

export default Shoes