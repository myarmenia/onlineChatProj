import React from "react";
import { getAccessToken } from "../Utils/accountUtils";

const requireNotAuth = (WrappedComponent) => {
  return (props) => {
    const token = getAccessToken();

      if (token) {
       window.location.href = "/user/account"

      }else{
        return <WrappedComponent {...props} />;
      }
  };
};

export default requireNotAuth;