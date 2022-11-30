import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

const Layout = ({children,title}) => {
  return (
    <>
        <Head>
          <link rel="icon" href="/favicon.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="rgba(255,57,84,1)" />
          <title>{title}</title>
        </Head>
        <div className='w-full overflow-x-hidden'>
          <Header/>
          {children}
        </div>
    </>
    
  )
}

export default Layout