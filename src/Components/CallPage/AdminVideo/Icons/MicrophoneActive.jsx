import React from "react";

const MicrophoneActive = () => {
  return (
    <div>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_30_8131)">
          <rect width="60" height="60" rx="30" fill="#0060FF" />
        </g>
        <path
          d="M34.6663 24.5557H25.7388H25.333V30.7103L28.9852 34.6668H31.42L34.6663 31.1499V24.5557Z"
          fill="white"
        />
        <path
          d="M29.9997 34.0835C32.578 34.0835 34.6663 31.9952 34.6663 29.4168V23.0002C34.6663 20.4218 32.578 18.3335 29.9997 18.3335C27.4213 18.3335 25.333 20.4218 25.333 23.0002V29.4168C25.333 31.9952 27.4213 34.0835 29.9997 34.0835Z"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.0752 27.2583V29.2416C21.0752 34.165 25.0769 38.1666 30.0002 38.1666C34.9235 38.1666 38.9252 34.165 38.9252 29.2416V27.2583"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 38.1665V41.6665"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_b_30_8131"
            x="-10.5"
            y="-10.5"
            width="81"
            height="81"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
        
          >
            <feFlood  result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.25" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_30_8131"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_30_8131"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default MicrophoneActive;
