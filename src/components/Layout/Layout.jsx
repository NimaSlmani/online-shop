import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full overflow-x-hidden'>
        <Header/>
    </div>
  )
}

export default Layout