import React, { useEffect } from "react";
import {get_user_cookies } from "../Utils/accountUtils";

const requireAuth = (WrappedComponent) => {
  return (props) => {
      if (!get_user_cookies.name) {
        window.location.href ="/signin"

      }else{
        return <WrappedComponent {...props} />;
      }

      



  };
};

export default requireAuth;