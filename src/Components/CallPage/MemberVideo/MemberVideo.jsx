import React, { useState } from "react";
import "./memberVideo.css";

const MemberVideo = ({ user,mute }) => {
  const [microphoneIsActive, setMicrophoneIsActive] = useState(true);

  return (
    <div className="memberVideo_main">
      <div className="member_video_div"></div>
      <div className="controllers">
        <div className="name">{user.name}</div>

          {microphoneIsActive && mute ?<div className="microphone" onClick={()=>setMicrophoneIsActive(!microphoneIsActive)}> <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_30_18419)">
              <rect width="24" height="24" rx="12" fill="#0060FF" />
            </g>
            <path
              d="M14.3327 10.2773H9.86891H9.66602V13.3546L11.4921 15.3329H12.7095L14.3327 13.5744V10.2773Z"
              fill="white"
            />
            <path
              d="M11.9993 15.042C13.2885 15.042 14.3327 13.9978 14.3327 12.7087V9.50033C14.3327 8.21116 13.2885 7.16699 11.9993 7.16699C10.7102 7.16699 9.66602 8.21116 9.66602 9.50033V12.7087C9.66602 13.9978 10.7102 15.042 11.9993 15.042Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
             
            />
            <path
              d="M7.53711 11.6289V12.6206C7.53711 15.0822 9.53794 17.0831 11.9996 17.0831C14.4613 17.0831 16.4621 15.0822 16.4621 12.6206V11.6289"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 17.083V18.833"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_b_30_18419"
                x="-10.5"
                y="-10.5"
                width="45"
                height="45"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
                
              >
                <feFlood result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.25" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_30_18419"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_30_18419"
                  result="shape"
                />
              </filter>
            </defs>
          </svg> </div>: <div className="microphone" onClick={()=>setMicrophoneIsActive(!microphoneIsActive)}> <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_30_18452)">
              <rect width="24" height="24" rx="12" fill="#EB5757" />
            </g>
            <path
              d="M14.3996 8.58098V8.40098C14.3996 7.07498 13.3256 6.00098 11.9996 6.00098C10.6736 6.00098 9.59961 7.07498 9.59961 8.40098V11.401"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.2236 13.3134C10.6616 13.7994 11.2976 14.0994 11.9996 14.0994C13.3256 14.0994 14.3996 13.0254 14.3996 11.6994V11.3994"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.86816 14.9698C9.69016 15.7318 10.7882 16.1998 12.0002 16.1998C14.5322 16.1998 16.5902 14.1418 16.5902 11.6098V10.5898"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.41016 10.5898V11.6098C7.41016 12.2458 7.53616 12.8458 7.77016 13.3978"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.8422 6.50391L7.1582 16.1939"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3994 6.59961V8.39961"
              stroke="white"
              strokeWidth="1.66129"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16.1992V17.9992"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_b_30_18452"
                x="-7.75267"
                y="-7.75267"
                width="39.5053"
                height="39.5053"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood  result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.87633" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_30_18452"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_30_18452"
                  result="shape"
                />
              </filter>
            </defs>
          </svg> </div>}
      </div>
    </div>
  );
};

export default MemberVideo;
