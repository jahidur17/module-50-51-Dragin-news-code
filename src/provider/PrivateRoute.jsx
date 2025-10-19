import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
//   console.log(user);
 const location = useLocation();
//  console.log(location);

 if(loading){
    return <Loading></Loading>;

 }
  //if user jodi thake return kore dibo
  if (user && user?.email) {
    return children;
  }
  //navigate ...>login
  return <Navigate state={location.pathname} to={`/auth/login`}></Navigate>;
};

export default PrivateRoute;
