import { useContext, useState } from "react"
import { AuthContex } from "./AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye ,FaEyeSlash,FaGoogle} from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const { createUserbyGmail ,userUpdate, googleLogIn ,setUser,err,user,setErr,setloading} = useContext(AuthContex);
    const navigate = useNavigate();
    const [state,setState] = useState(false)

    function handleBtn() {
      setState(!state);
    }   

    function handleRegister(e){
          e.preventDefault();
          const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
          setErr('');

          const email = e.target.email.value;
          const name = e.target.name.value;
          const pass = e.target.pass.value;
          const img = e.target.img.value;

          e.target.reset()

          if (!regex.test(pass)) {
            setErr("Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
            return;
        }

          createUserbyGmail(email,pass)
          .then(res=> {
            // console.log(res.user);
            setUser(res.user);
            setloading(true)
            navigate('/') 
            
           
            
            userUpdate({displayName:name , photoURL: img}).then(() => {
            console.log('userUpdated');
            })
          })
          .catch(err => {
            // console.log(err.message);
            setErr(err.message)
          })
        toast("You Have Successfully Create an Account!!");

    }

    // console.log(user);


    function handleGoogle(){
      googleLogIn()
      .then((result) => {
       
        setUser(result.user); 
        setErr(''); 
        setloading(true);
        navigate('/'); 
        toast("You Have Successfully Logged In With Google!");
      })
      .catch((error) => {
        
        setErr(error.message); 
      });
    }

  return ( 
    <div className="card bg-base-100 md:w-1/3 my-10 mx-auto shrink-0 shadow-2xl border">
    <form className="card-body" onSubmit={handleRegister}>
    <ToastContainer position='top-center' />
    <h2 className="text-xl pt-4 font-bold text-center">Register Your Account</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="name" name="name" placeholder="Name" className="input input-bordered"  />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="email" className="input input-bordered"  />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input type="photo" name="img" placeholder="photo URL" className="input input-bordered" />
      </div>
      <div className="form-control relative">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type={state ? 'text' : 'password'} name="pass" placeholder="password" className="input input-bordered" />
        {/* <span><button onClick={handleBtn} className="absolute top-14 right-4">{state? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>}</button></span> */}
        <button 
  type="button" 
  onClick={handleBtn} 
  className="absolute top-14 right-4"
  aria-label="Toggle password visibility"
  title="Toggle password visibility">
  {state ? <FaEyeSlash /> : <FaEye />}
</button>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-accent mb-2" >Register Now</button>
        <button className="btn btn-outline" onClick={handleGoogle}><FaGoogle></FaGoogle> Register With Google</button>
      </div>
      <div>
        <p className="text-center text-red-600 text-sm font-bold">{err}</p>
      </div>
      <p className="text-center text-sm">Al Ready Have an Account? <span className="text-green-600 text-lg font-bold"><NavLink to={'/login'} >Login</NavLink></span></p>
    </form>
  </div>
  )
}

export default Register