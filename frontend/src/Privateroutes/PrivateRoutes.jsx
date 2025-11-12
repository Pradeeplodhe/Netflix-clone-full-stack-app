  import React from "react";
  import { Navigate } from "react-router-dom";
  export default function PrivateRoutes({children}){
    // const naviaget=useNavigate();
      const token=localStorage.getItem("token");
      if(!token){
        // return naviaget("/login")
       return <Navigate to="/login" replace />;
      }
      return children;
  }

   