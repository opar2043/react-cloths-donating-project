import React, { useContext } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AuthContex } from '../Provider/AuthProvider'
import { signOut } from 'firebase/auth'
import auth from '../Firebase/_Firebase.config'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";


const Navbar = () => {
  const {user,setUser} = useContext(AuthContex) 
  const navigate = useNavigate()


  function makeLogout(){
    signOut(auth).then(()=>{
      console.log('log out user');
      navigate('/')
      setUser(null)

      
    }).catch((error) => {
      console.log(error.code);
    })

    Swal.fire({
      title: 'Error!',
      text: 'Logged Out!',
      icon: 'error',
      confirmButtonText: 'OK!'
    })

  }

    const links = <>
       <li><NavLink to={'/'}>Home</NavLink></li>
       <li><NavLink to={'/campgain'}>Campgain</NavLink></li>
       <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
       {
          user && <li><NavLink to={'/donattionDetails'}>Donation Details</NavLink></li>
       }
    </>
  return (
    <div>
      <ToastContainer></ToastContainer>
        <div className="navbar bg-violet-500 text-white md:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu gap-2 menu-sm dropdown-content bg-slate-200 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost font-bold text-xl">Donating Cloths</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal  px-1 gap-2">
      {links}
    </ul>
  </div>  
  <div className="navbar-end ">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      {
        user && user?.email ?  <div className="w-10 rounded-full">
        <img  src={user.photoURL} />

      </div> :  <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS Navbar component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </div>
      }
      </div>
    {
       
      user && user?.email ? <button onClick={makeLogout}><NavLink  className="btn btn-accent">Log Out</NavLink>  </button>  : <NavLink to={'/login'} className="btn btn-warning">LogIn</NavLink> 
    }
  </div>
</div>
    </div>
  )
}

export default Navbar