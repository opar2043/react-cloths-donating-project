import React from "react";

const HowToHelp = () => {
  return (
    <div className=" py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-teal-400 mb-6">
          How It Works
        </h1>

        {/* Instructions for Donation */}
   

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">
            Steps to Donate
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Sort out clean and usable winter clothing.</li>
            <li>Fill out the donation form on our website to register your donation.</li>
            <li>
              Drop off the items at the nearest collection point, or schedule a pickup via our form.
            </li>
            <li>Track your donation and see the impact on our website!</li>
          </ol>
        </div>

        {/* Collection Points */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">
            Collection Points
          </h2>
          <p className="text-gray-600">
            You can drop off your donations at any of our convenient collection points across Bangladesh:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
            <li>Dhaka: Banani Community Center, Road 12</li>
            <li>Chittagong: GEC Circle Donation Booth</li>
            <li>Rajshahi: Rajshahi University Main Gate</li>
            <li>Sylhet: Zindabazar Volunteer Center</li>
            <li>Khulna: Khulna Press Club Premises</li>
          </ul>
        </div>

        {/* Supported Divisions */}
        <div>
          <h2 className="text-2xl font-semibold text-teal-400 mb-4">
            Supported Divisions
          </h2>
          <p className="text-gray-600">
            We currently support donations and distribution across the following divisions:
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            {["Dhaka", "Chittagong", "Rajshahi", "Sylhet", "Khulna", "Barishal", "Rangpur", "Mymensingh"].map(
              (division) => (
                <span
                  key={division}
                  className="bg-teal-400 text-base-300 px-4 py-2 rounded-lg shadow-md"
                >
                  {division}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
