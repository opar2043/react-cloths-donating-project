import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user , loading } = useContext(AuthContex); 
  const location = useLocation();
  console.log(location);


  if (!user) {
   
    return <Navigate state={location.pathname} to="/login"  />;
  }

  
  return children;
};

export default PrivateRoute;