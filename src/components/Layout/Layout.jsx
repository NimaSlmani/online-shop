import { useSelector } from 'react-redux'

import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

const Layout = ({children,title,routes}) => {
  let { open_sidebar } = useSelector(state => state.style)
  return (
    <>
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="rgba(255,57,84,1)" />
          <title>{title}</title>
        </Head>
        <Menu/>
        <div className='w-full overflow-x-hidden'>
          <Header routes={routes}/>
          {children}
          <Footer/>
        </div>
    </>
    
  )
}

export default Layout