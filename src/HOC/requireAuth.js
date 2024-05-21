import React, { useEffect } from "react";
import { getAccessToken } from "../Utils/accountUtils";

const requireAuth = (WrappedComponent) => {
  return (props) => {
    const token = getAccessToken();

      if (!token) {
        window.location.href ="/user/signin"

      }else{
        return <WrappedComponent {...props} />;
      }

      



  };
};

export default requireAuth;