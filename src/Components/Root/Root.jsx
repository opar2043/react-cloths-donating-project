
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='mx-auto w-11/12'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Root