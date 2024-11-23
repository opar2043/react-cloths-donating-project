import { NavLink, useLoaderData, useParams } from "react-router-dom"


const Dashboard = () => {
  const {id} = useParams();
//  console.log(id);
  const data = useLoaderData() 


  const userId = Array.isArray(data) ? data.find(singleId => singleId.id === Number(id)) : null;

  if (!userId) {
    return <p>Data not found for the given ID.</p>;
  }
  console.log(userId , 'userid');
  console.log(data);

  const {contactInfo, description ,division,image,status,title } = userId;
 


  return (
    <div className="card my-10 bg-base-100 mx-auto w-2/3 border shadow-xl pb-4">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl w-[40%] object-cover" />
  </figure>
  <div className="p-4 text-left py-2 flex flex-col gap-4">
   
    <h2 className="font-extrabold text-center text-xl md:text-3xl mt-4">{title}</h2>
    <h2 className=" text-left text-lg font-extrabold">Division: {division}</h2>
    <h2 className=" text-lg font-extrabold">Contuct Info: {contactInfo}</h2>
     <p className="text-lg font-extrabold">Our Event Stats: {status  ? `Ongoing` :'Upcoming'}</p>
    <p className="text-gray-700 font-semibold">{description}</p>
    <div className="card-actions w-full">
      <button className="btn btn-primary w-full"><NavLink to={'/'}>Back To Home</NavLink></button>
    </div>
  </div>
</div>
  )
}

export default Dashboard