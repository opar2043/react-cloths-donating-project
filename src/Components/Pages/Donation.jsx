import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Donation = () => {
  function handleForm(e) {
    e.preventDefault();
    const num = e.target.num.value;
    const text = e.target.text.value;
    const address = e.target.address.value;
    toast.success("Thank you! We will reach your destination soon.");

    e.target.reset();
  }

  return (
    <div className="flex flex-col md:flex-row justify-center items-start mx-auto w-11/12 md:w-9/12 my-12 gap-10">
      <ToastContainer position="top-center" />

      {/* Campaign Info Section */}
      <div className="flex flex-col gap-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Our Campaign Info</h2>
        <p className="font-medium text-lg">
          <span className="font-bold">Area:</span> Chittagong, Rajshahi, Narayanganj
        </p>
        <p className="font-medium text-lg">
          <span className="font-bold">Date:</span> {new Date().toLocaleDateString()}
        </p>
        <p className="font-medium text-lg">
          <span className="font-bold">Working People:</span> About 300 people
        </p>
        <p className="font-medium text-lg">
          <span className="font-bold">Email:</span> rezonerashidopar@gmail.com
        </p>
        <p className="font-medium text-lg">
          <span className="font-bold">Mobile:</span> 01814482832
        </p>
        <p className="font-medium text-lg">
          <span className="font-bold">Items:</span> Clothes, Food
        </p>
      </div>

      {/* Form Section */}
      <div className="card bg-white border shadow-lg rounded-lg w-full md:w-1/2 p-6">
        <form className="card-body space-y-6" onSubmit={handleForm}>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">Submit Your Donation</h3>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Number of Items</span>
            </label>
            <input
              type="number"
              name="num"
              placeholder="Enter quantity"
              className="input input-bordered border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-md"
              required
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Item Name</span>
            </label>
            <input
              type="text"
              name="text"
              placeholder="Enter item name"
              className="input input-bordered border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-md"
              required
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text text-gray-600">Address</span>
            </label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="input input-bordered border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-md"
              required
            />
          </div>
          
          <div className="form-control">
            <button
              type="submit"
              className="btn w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-md py-2"
            >
              Submit Your Info
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donation;
