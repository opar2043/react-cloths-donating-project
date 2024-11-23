import { useContext } from "react"
import { AuthContex } from "../Provider/AuthProvider"
import { NavLink } from "react-router-dom";


const NewDashboard = () => { 
  const {user,userUpdate,setUser} = useContext(AuthContex);
  //  console.log(user);


  function updateProfile(e){
    e.preventDefault()
    const name = e.target.name.value;
    const img = e.target.img.value;

    e.target.reset();

    userUpdate({ displayName: name, photoURL: img })
    .then(() => {
      console.log('User updated successfully');
      setUser({ ...user, displayName: name, photoURL: img }); 
    })
      
  }

  return (
    <div>

      {/* form */}
        <div className="card bg-primary text-primary-content md:w-1/2 mx-auto my-10">
  <div className="card-body">
    <h3 className="text-center font-extrabold text-2xl">User Information</h3>
    <h2 className="card-title"><span className="font-bold text-center text-xl">Welcome</span> {user.displayName}</h2>
    <p className="font-bold"><span className="font-semibold text-sm">Email:</span> {user.email}</p>
    <img src={user.photoURL} alt="user Image" className="w-[120px] rounded-md" />
    <p><span className="font-semibold text-sm">Creation Time:</span> {user.metadata.creationTime}</p>
    <p><span className="font-semibold text-sm">Logged In:</span> {user.metadata.lastSignInTime}</p>
    <div className="card-actions">
      <button className="btn btn-warning">
           <NavLink to={'/'}>Backn To Home</NavLink>
      </button>
    </div>
  </div>
</div>


{/* form herer */}

<div className="card bg-base-100 md:w-1/3 my-10 mx-auto shrink-0 shadow-2xl border px-3">
    <form className="card-body " onSubmit={updateProfile}>
    <h2 className="text-xl pt-4 font-bold text-center">Update Your Account</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="name" name="name" placeholder="Name" className="input input-bordered"  />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <input type="photo" name="img" placeholder="photo URL" className="input input-bordered" />
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-violet-500 text-white mb-2" >Update Now</button>
      </div>
    
    </form>
  </div>
    </div>
  )
}

export default NewDashboard