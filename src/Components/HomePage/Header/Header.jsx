import React, { useRef, useState } from "react";
import "./header.css";
import img from "../../../Images/Group 237571.png";
import { NavLink} from "react-router-dom";

const Header = () => {
  const [text, setText] = useState("");
  const linkRef = useRef(null);



  const changeStyleFocus = () => {
    linkRef.current.style.border = "1px solid darkBlue";
  };
  const changeStyleBlur = () => {
    linkRef.current.style.border = "1px solid white";
  };

  return (
    <div className="header_main">
      <div className="container header_cont">
        <div className="header_left_side">
          <h1>Secure video conferencing</h1>
          <div className="paragraphs">
            <div className="first_p">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#FFD955"
                  strokeWidth="2"
                />
                <path d="M8 12L11 15L16 9" stroke="#FFD955" strokeWidth="2" />
              </svg>
              <p>Provides video communication for collaborative work</p>
            </div>
            <div className="first_p">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#FFD955"
                  strokeWidth="2"
                />
                <path d="M8 12L11 15L16 9" stroke="#FFD955" strokeWidth="2" />
              </svg>
              <p>Everywhere wherever you are</p>
            </div>
          </div>
          <div className="links">
            <NavLink to={"/signIn"}>New meeting</NavLink>
            <div className="link" ref={linkRef}>

              {
                text.length ?  <svg
                width="30"
                height="30"
                viewBox="0 0 36 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0645 25.4601H24.25C28.621 25.4601 32.2105 21.8851 32.2105 17.4996C32.2105 13.1285 28.6355 9.53906 24.25 9.53906H22.0645"
                  stroke="#0060FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3943 9.53906H11.2232C6.8377 9.53906 3.2627 13.1141 3.2627 17.4996C3.2627 21.8706 6.8377 25.4601 11.2232 25.4601H13.3943"
                  stroke="#0060FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9473 17.499H23.5262"
                  stroke="#0060FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>  :    <svg
                width="30"
                height="30"
                viewBox="0 0 35 35"
                color="black"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{pointerEvents: "none"}}
              >
                <path
                  d="M22.0645 25.4611H24.25C28.621 25.4611 32.2105 21.8861 32.2105 17.5006C32.2105 13.1295 28.6355 9.54004 24.25 9.54004H22.0645"
                  stroke="#0060FF"
                  strokeOpacity="0.6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3943 9.54004H11.2232C6.8377 9.54004 3.2627 13.115 3.2627 17.5006C3.2627 21.8716 6.8377 25.4611 11.2232 25.4611H13.3943"
                  stroke="#0060FF"
                  strokeOpacity="0.6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9473 17.5H23.5262"
                  stroke="#0060FF"
                  strokeOpacity="0.6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              }

           
              <input
                type="text"
                placeholder="enter the link "
                value={text}
                onChange={(e) => setText(e.target.value)}
                onFocus={changeStyleFocus}
                onBlur={changeStyleBlur}
              />
            </div>
          </div>
        </div>
        <div className="header_right_side">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
