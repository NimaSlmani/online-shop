import { useState,useEffect } from 'react'

import { BsChevronUp } from 'react-icons/bs'

import Layout from '../components/Layout/Layout'
import Screen from '../sections/home/Screen'
import Quick_links from '../sections/home/Quick_links'
import Latest_products from '../sections/home/Latest_products'
import Shoes from '../sections/home/Shoes'
import Suggested_products from '../sections/home/Suggested_products'
import Offers from '../sections/home/Offers'
import Shirts from '../sections/home/Shirts'

let Home = () => {
  let [showTopBtn,setShowTopBtn] = useState(false)
  useEffect(() => {
    let windowHeight = window.innerHeight
    window.addEventListener('scroll', () => {
        if (window.scrollY > windowHeight) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
}, []);
  return (
    <div>
      <div className={`top_scroll_button ${showTopBtn ? 'opacity-100 z-30 bottom-[105px] md:bg-gray-200 md:bottom-[140px] lg:bottom-[80px]' : 'opacity-0 z-0 bottom-[100px]'} `} onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}><BsChevronUp/></div>
      <Layout title='Purple shopping cart'>
        <Screen/>
        <Quick_links/>        
        <Latest_products/>
        <Shoes/>
        <Suggested_products/>
        <Offers/>
        <Shirts/>
      </Layout>
    </div>
  )
}

export default Home