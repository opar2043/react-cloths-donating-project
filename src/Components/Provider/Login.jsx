import { useContext, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { AuthContex } from "./AuthProvider";
import { FaEye ,FaEyeSlash} from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../Firebase/_Firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";







const Login = () => {

    const {makeLogIn , setUser,user,makesignout,setloading} = useContext(AuthContex)
    const [err,setErr] = useState(null)
    const navigate = useNavigate()
    const [state,setState] = useState(false)
    const emailRef = useRef()
    const [msg,setMsg]= useState('');
    const location = useLocation()



    function handleBtn() {
      setState(!state);
      
    } 
    // console.log(user , 'user from Login');

    function handleLogin(e){
        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        setErr(''); 
        makeLogIn(email,pass)
        .then(res =>{
            // console.log(res.user);
            setUser(res.user)
            navigate(location?.state? location.state : "/");
            setloading(true)
            setMsg('')
       
            Swal.fire({
              title: "Logged In Successfully!",
              text: "Now You Can Visit Our Web Site.",
              icon: "success",
              confirmButtonText: "Continue",
              confirmButtonColor: "#3085d6",
            });

        })
        .catch(err => {
            // console.log(err.user);
            setErr(err.message)
            setMsg('')
        }) 

       {
          user &&  toast("You Have Successfully Logged In!");          
       }
        e.target.reset()
  }

  // forget pass
  function handleForgetPassword() {
      console.log('passs reset',emailRef.current.value);
      const email = emailRef.current.value;

      if(!emailRef){
        setErr('please provide email adress!')
      }else{
        sendPasswordResetEmail(auth,email)
        .then(()=>{
          alert('Reset Email sent!')
        })
      }
}

  return (
    <div className="card border bg-base-100 md:w-1/3 my-10 mx-auto shrink-0 shadow-2xl ">
      <form className="card-body" onSubmit={handleLogin}>
      <ToastContainer position='top-center' />
      <h2 className="text-xl pt-4 font-bold text-center">Log In Your Account</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
            <span><a onClick={handleBtn} type="button" className="absolute top-14 right-4">{state? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>}</a></span>
            {/* <button
      onClick={handleBtn} // Toggle password visibility
      type="button"       // Prevent default submit behavior
      className="absolute top-14 right-4"
    >
      {state ? <FaEyeSlash /> : <FaEye />}
    </button> */}
          </label>
          <input type={state ? 'text' : 'password'} name="pass" placeholder="password" className="input input-bordered" required />
          <label className="label" onClick={handleForgetPassword}>
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white bg-gradient-to-r from-cyan-500 to-blue-500 mb-2">Login</button>
       
        </div>
        <div>
        {
          err && <p className="text-center text-red-600 text-sm font-bold">{err}</p>
        }

        {
          msg && <p className="text-center text-green-600 text-sm font-bold">{msg}</p>
        }
      </div>
        <p className="text-center text-sm">Do not Have an Account? <span className="text-red-600 text-lg font-bold"><NavLink to={'/register'} >Register</NavLink></span></p>
      </form>
    </div>
  )
}

export default Login