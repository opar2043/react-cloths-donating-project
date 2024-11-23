
const Join = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 my-5">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-violet-600 mb-6">
          Join with Us!
        </h1>
        <p className="text-gray-700 mb-10 text-sm">
          Become a part of our compassionate team and help us bring warmth and hope to those in need. Together, we can make a lasting impact!
        </p>

        {/* Steps to Join */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white shadow-lg rounded-lg p-6 border animate__animated animate__backInLeft animate__repeat-2">
            <h2 className="text-2xl font-semibold text-violet-500 mb-4">1. Volunteer</h2>
            <p className="text-gray-600">
              Join our group of dedicated volunteers to help collect, sort, and distribute donations to communities in need.
            </p>
            <button className="btn mt-4 bg-violet-500 text-white px-6 py-2 rounded-lg">
              Be a Volunteer
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border animate__animated animate__backInDown animate__repeat-2">
            <h2 className="text-2xl font-semibold text-violet-500 mb-4">2. Partner with Us</h2>
            <p className="text-gray-600">
              Collaborate with us as a corporate sponsor, NGO, or community group to expand our reach and help more people.
            </p>
            <button className="btn mt-4 bg-violet-500 text-white px-6 py-2 rounded-lg">
              Partner With US!
            </button>
          </div>


          <div className="bg-white shadow-lg rounded-lg p-6 border animate__animated animate__backInRight animate__repeat-2">
            <h2 className="text-2xl font-semibold text-violet-500 mb-4">3. Spread the Word</h2>
            <p className="text-gray-600">
              Use your voice to advocate for our mission. Share our message on social media and encourage others to join.
            </p>

            <button className="btn mt-4 bg-violet-500  text-white px-6 py-2 rounded-lg">
              Share People
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
