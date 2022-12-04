import { useSelector } from "react-redux"
import Layout from '../components/Layout/Layout'
import Screen from '../sections/home/Screen'
import Quick_links from '../sections/home/Quick_links'
import Latest_products from '../sections/home/Latest_products'
import Shoes from '../sections/home/Shoes'
import Suggested_products from '../sections/home/Suggested_products'
import Offers from '../sections/home/Offers'
import Shirts from '../sections/home/Shirts'

let Home = () => {
  let {arrow_left_slider} = useSelector(state => state.style)
  

  return (
    <>
      <Layout title='Purple shopping cart'>
        <Screen/>
        <Quick_links/>        
        <Latest_products/>
        <Shoes/>
        <Suggested_products/>
        <Offers/>
        <Shirts/>
      </Layout>
    </>
  )
}

export default Home