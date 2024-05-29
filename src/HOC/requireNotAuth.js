import React from "react";
import { getAccessToken, get_user_cookies } from "../Utils/accountUtils";

const requireNotAuth = (WrappedComponent) => {
  return (props) => {
      if (get_user_cookies.name) {
       window.location.href = "/callPage"

      }else{
        return <WrappedComponent {...props} />;
      }
  };
};

export default requireNotAuth;