import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* Icon */}
      <FaExclamationTriangle className="text-red-500 text-8xl mb-6" />

      {/* Error Message */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something Went Wrong</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        The page you're looking for doesn't exist or an unexpected error occurred.
      </p>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default Error;
