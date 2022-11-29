import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Header/>
        {children}
    </div>
  )
}

export default Layout