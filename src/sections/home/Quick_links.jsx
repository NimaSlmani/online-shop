import {BsCoin} from 'react-icons/bs'
import {TiStopwatch} from 'react-icons/ti'

import Container from '../../components/Container'
import Primary_Title from '../../components/Text/Primary_Title'
import Button_Link_Vertical from '../../components/Links/Button_Link_Vertical';
import Custome_Link from '../../components/Links/Custome_Link';

import Image from 'next/image';

let Pattern = () => <Image src='/patterns/yellow.svg' alt='uiminut' width={300} height={400} className="w-[450px] absolute left-[0px] bottom-[-340px] hidden lg:block"/>

const quick_links = () => {
  return (
    <Container bg='bg-yellow-200'>
        <Pattern/>
        <div className='lg:flex'>
            <div className='mb-[10px] lg:w-6/12 lg:mb-0'>
                <Primary_Title text='Sunt In Culpa Qui Officia Deserunt'/>
                <p className='text-14 text-black-100 font-robotoReqular'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>
            </div>
            <div className='lg:w-6/12 flex lg:pl-[15px]'>
                <div className='w-full md:h-full md:grid md:grid-cols-2 md:gap-x-[15px]'>
                  <Custome_Link cls='mb-[15px] md:mb-0' icon={<TiStopwatch size={24}/>} text="The Best Selling Results" path='/'/>
                  <Custome_Link icon={<BsCoin size={24}/>} text="Latest Products" path='/'/>
                </div>
                <Button_Link_Vertical cls='ml-[15px]' path='/' text='Best Products'/>
            </div>
        </div>
    </Container>
  )
}

export default quick_links