import { NavLink, useNavigate } from "react-router-dom";


const ClothData = ({cloth}) => {
  const navigate = useNavigate();
  function handleId(){
    navigate(`/campgain/${id}`)
  }
    // console.log(cloth);
    const {contactInfo, description ,division,id,image,status,title } = cloth
  return (
    <div>
<div className="card border mt-10 card-compact  bg-base-100 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Shoes" 
      className="h-[220px] mb-3 object-cover"/>
  </figure>
  <div className="card-body  p-3">
    <h2 className="card-title text-xl">{title}</h2>
    <h2 className=" font-semibold">{division}</h2>
    <p className="text-sm font-semibold text-gray-600">{description.slice(0,60)}...</p>
    <div className="card-actions justify-start mt-2">
      <NavLink to={`/catagory/${id}`} className={'w-full'}>
          <button className="btn btn-warning w-full" >Donate Now</button>
      </NavLink>
    </div>
  </div>
</div>
    </div>
  )
}

export default ClothData