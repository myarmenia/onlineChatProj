import React from "react";

const ShareDisabled = ({setshareIsActive,shareIsActive}) => {
  return (
    <div  onClick={() => setshareIsActive(!shareIsActive)}>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_30_8102)">
          <rect width="60" height="60" rx="30" fill="#DFEBFF" />
        </g>
        <path
          d="M26.4997 41.6668H33.4997C39.333 41.6668 41.6663 39.3335 41.6663 33.5002V26.5002C41.6663 20.6668 39.333 18.3335 33.4997 18.3335H26.4997C20.6663 18.3335 18.333 20.6668 18.333 26.5002V33.5002C18.333 39.3335 20.6663 41.6668 26.4997 41.6668Z"
          stroke="#0060FF"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26.5 27.0952L30 23.5952L33.5 27.0952"
          stroke="#0060FF"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 23.5952V32.9285"
          stroke="#0060FF"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 35.2617C27.5383 36.7784 32.4617 36.7784 37 35.2617"
          stroke="#0060FF"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <filter
            id="filter0_b_30_8102"
            x="-10.5"
            y="-10.5"
            width="81"
            height="81"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.25" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_30_8102"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_30_8102"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ShareDisabled;
