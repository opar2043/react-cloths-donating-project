
import React from "react";

const SendFund = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 my-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-violet-600 mb-6">
          Support Us 
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Your contribution helps us provide warmth and hope to those in need. Donate securely through the following methods:
        </p>

        {/* Payment Methods */}
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white shadow-lg rounded-lg p-6 border animate__animated animate__backInLeft animate__delay-2s	2s">
            <h2 className="text-xl font-semibold text-violet-500 mb-4">bKash</h2>
            <p className="text-gray-600">Merchant Number: <strong>01814482832</strong></p>
            <p className="text-gray-600">Reference: WinterCloth</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border animate__animated animate__backInDown animate__delay-2s	2s">
            <h2 className="text-xl font-semibold text-violet-500 mb-4">Nagad</h2>
            <p className="text-gray-600">Merchant Number: <strong>01814482832</strong></p>
            <p className="text-gray-600">Reference: WinterCloth</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 border animate__animated animate__backInRight animate__delay-2s	2s animate__fast 500ms">
            <h2 className="text-xl font-semibold text-violet-500 mb-4">Bank Transfer</h2>
            <p className="text-gray-600">Account Name: Winter Help Foundation</p>
            <p className="text-gray-600">Account Number: <strong>123456789</strong></p>
            <p className="text-gray-600">Bank Name: IFIC Bank</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendFund;
