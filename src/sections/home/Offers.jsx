import {useLayoutEffect, useState,useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay,Navigation,Mousewheel } from 'swiper';

import Container from '../../components/Container'
import Primary_Title from '../../components/Text/Primary_Title'
import Card_fill from '../../components/Cards/Card_fill'

import Image from 'next/image'

import {BsChevronLeft,BsChevronRight,BsChevronUp,BsChevronDown} from 'react-icons/bs'

const Pattern = () => <Image src='/patterns/gray.svg' alt='uiminut' width={300} height={400} className="w-[450px] absolute left-[0px] bottom-[-350px] hidden lg:block"/>
const ModelingImage = () => <Image src='/images/modeling-3.png' alt='uiminut' width={500} height={400} className='absolute top-[40px] w-[600px] right-[-30%] md:w-[600px] md:top-[100px] lg:right-[0px]'/>

const Slider_sm_md = () => {
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
        }
    },[])
    const params = {
        spaceBetween: 30,
        slidesPerView:slide,
        loop : true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        }
    }
    return (
        <div className='lg:hidden'>
            <Swiper 
                className='w-full py-[20px]'
                modules={[Navigation]} {...params}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
            >
                    <SwiperSlide>
                        <Card_fill type='dress' src='/product-1.png' imageSize='160'/>
                    </SwiperSlide>
            </Swiper>
            <div className='flex'>
                <div className='mr-[15px] arrow_button' ref={navigationPrevRef}><BsChevronLeft/></div>
                <div className='arrow_button' ref={navigationNextRef}><BsChevronRight/></div>
            </div>
        </div>
    )
}

const Slider_lg = () => {
    let navigationPrevRef = useRef(null)
    let navigationNextRef = useRef(null)
    let [slide,setSlide] = useState(1)
    SwiperCore.use([Autoplay,Mousewheel]);
    useLayoutEffect(()=>{
        if(window.innerWidth <=640){
            setSlide(1)
        }else if(window.innerWidth >=640 && window.innerWidth <=768){
            setSlide(2)
        }else if(window.innerWidth >=768 && window.innerWidth <=1024){
            setSlide(3)
        }
    },[])
    const params = {
        spaceBetween: 200,
        slidesPerView:slide,
        loop : true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: true
        }
    }
    return (
        <div className='hidden pt-[30px] relative lg:block'>
            <p className='left-[25.5%] absolute text-14 font-robotoReqular' data-aos="fade-right">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod <br/> Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad.</p>
            <div className='absolute right-0 z-20' data-aos="fade-down">
                <div className='mb-[15px] arrow_button' ref={navigationPrevRef}><BsChevronUp/></div>
                <div className='arrow_button' ref={navigationNextRef}><BsChevronDown/></div>
            </div>
            <Swiper 
                className='w-full overflow-hidden h-[635px]'
                modules={[Navigation]} {...params}
                direction={'vertical'}
                mousewheel={true}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
            >
                <SwiperSlide className='slide grid grid-cols-4 gap-[30px]'>
                    <div className='h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                    <div className='mt-[100px] h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                    <div className='mt-[200px] h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                    <div className='mt-[300px] h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                </SwiperSlide>
                <SwiperSlide className='slide grid grid-cols-4 gap-[30px]'>
                    <div className='h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                    <div className='mt-[100px] h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                    <div className='mt-[200px] h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                    <div className='mt-[300px] h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                </SwiperSlide>
                <SwiperSlide className='slide grid grid-cols-4 gap-[30px]'>
                    <div className='h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                    <div className='mt-[100px] h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                    <div className='mt-[200px] h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                    <div className='mt-[300px] h-fit'><Card_fill  type='dress' src='/product-1.png' imageSize='120'/></div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

const Offers = () => {
  return (
    <Container pId='Offers'>
        <Pattern/>
        <ModelingImage/>
        <div data-aos="fade-right">
            <Primary_Title text='Special Sale Of Men&apos;s Shirts'/>        
        </div>
        <Slider_sm_md/>
        <Slider_lg/>
    </Container>
  )
}

export default Offers