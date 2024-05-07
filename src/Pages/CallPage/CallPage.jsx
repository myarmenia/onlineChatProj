import React, { useRef, useState } from "react";
import CallHead from "../../Components/CallPage/CallHead/CallHead";
import "./callPage.css";
import AdminVideo from "../../Components/CallPage/AdminVideo/AdminVideo";
import { useLocation } from "react-router-dom";
import { users } from "../../users";
import MemberVideo from "../../Components/CallPage/MemberVideo/MemberVideo";
import MemberItem from "../../Components/CallPage/MemberItem/MemberItem";

const CallPage = () => {
  const location = useLocation();
  const [muteEveryoneIsActive, setMuteEveryoneIsActive] = useState(true);
  const elRef = useRef(null)

  location.pathname === "/callpage"
    ? (document.body.style.backgroundColor = "rgb(238, 238, 238)")
    : (document.body.style.backgroundColor = "white");


  return (
    <div className="callPage_div">
      <CallHead />
      <div className="video_content container">
        <div className="left_side">
          <AdminVideo />
          <div
            className={muteEveryoneIsActive ? "mute" : "mute_active"}
            onClick={() => setMuteEveryoneIsActive(!muteEveryoneIsActive)}
          >
            <p>Mute everyone</p>
            {muteEveryoneIsActive ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3337 6.11133H6.95685H6.66699V10.5075L9.27569 13.3335H11.0148L13.3337 10.8215V6.11133Z"
                  fill="white"
                />
                <path
                  d="M10.0003 12.9165C11.842 12.9165 13.3337 11.4248 13.3337 9.58317V4.99984C13.3337 3.15817 11.842 1.6665 10.0003 1.6665C8.15866 1.6665 6.66699 3.15817 6.66699 4.99984V9.58317C6.66699 11.4248 8.15866 12.9165 10.0003 12.9165Z"
                  stroke="#0060FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.62598 8.04199V9.45866C3.62598 12.9753 6.48431 15.8337 10.001 15.8337C13.5176 15.8337 16.376 12.9753 16.376 9.45866V8.04199"
                  stroke="#0060FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 15.8335V18.3335"
                  stroke="#0060FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3337 5.25033V5.00033C13.3337 3.15866 11.842 1.66699 10.0003 1.66699C8.15866 1.66699 6.66699 3.15866 6.66699 5.00033V9.16699"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.53418 11.8243C8.14251 12.4993 9.02585 12.916 10.0008 12.916C11.8425 12.916 13.3342 11.4243 13.3342 9.58268V9.16602"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.65039 14.1243C6.79206 15.1827 8.31706 15.8327 10.0004 15.8327C13.5171 15.8327 16.3754 12.9743 16.3754 9.45768V8.04102"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.625 8.04102V9.45768C3.625 10.341 3.8 11.1743 4.125 11.941"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.7254 2.36621L3.27539 15.8245"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.16699 2.49902V4.99902"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 15.833V18.333"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div className="all_members">
            {users.map((u) => (
              <MemberVideo key={u.id} user={u} mute={muteEveryoneIsActive} />
            ))}
          </div>
        </div>

        <div className="right_side">
          <div className="all_friends">
            <div className="title">
              <p>Participants</p>

              <button>
                Add Participant
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.2516 10.0003C12.5528 10.0003 14.4183 8.13485 14.4183 5.83366C14.4183 3.53247 12.5528 1.66699 10.2516 1.66699C7.95044 1.66699 6.08496 3.53247 6.08496 5.83366C6.08496 8.13485 7.95044 10.0003 10.2516 10.0003Z"
                    stroke="#0060FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.09375 18.3333C3.09375 15.1083 6.30208 12.5 10.2521 12.5C11.0521 12.5 11.8271 12.6083 12.5521 12.8083"
                    stroke="#0060FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5856 15.0003C18.5856 15.267 18.5523 15.5253 18.4856 15.7753C18.4106 16.1087 18.2773 16.4337 18.1023 16.717C17.5273 17.6837 16.4689 18.3337 15.2523 18.3337C14.3939 18.3337 13.6189 18.0086 13.0356 17.4753C12.7856 17.2586 12.5689 17.0003 12.4023 16.717C12.0939 16.217 11.9189 15.6253 11.9189 15.0003C11.9189 14.1003 12.2773 13.2753 12.8606 12.6753C13.4689 12.0503 14.3189 11.667 15.2523 11.667C16.2356 11.667 17.1273 12.092 17.7273 12.7753C18.2606 13.367 18.5856 14.1503 18.5856 15.0003Z"
                    stroke="#0060FF"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.4941 14.9834H14.0107"
                    stroke="#0060FF"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.252 13.7666V16.2583"
                    stroke="#0060FF"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="all_friends_list">
                <ul ref={elRef} id="elem">
                    {
                        users.map((u)=><li key={u.id} ><MemberItem user={u}/></li>)
                    }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallPage;
