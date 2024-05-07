import React, { useState } from "react";
import "./adminVideo.css";
import MicrophoneActive from "./Icons/MicrophoneActive";
import MicrophoneDisabled from "./Icons/MicrophoneDisabled";
import VideoActive from "./Icons/VideoActive";
import Videodisabled from "./Icons/Videodisabled";
import ShareActive from "./Icons/ShareActive";
import ShareDisabled from "./Icons/ShareDisabled";
import { users } from "../../../users";

const AdminVideo = () => {
  const [micrIsActive, setMicrIsActive] = useState(true);
  const [videoIsActive, setVideoIsActive] = useState(true);
  const [shareIsActive, setshareIsActive] = useState(false);
  const [share, setShare] = useState("")

  const setShareSetting = (setting)=>{
    if(share === setting){
      setShare("")
    }else{
      setShare(setting)
    }
  }

  return (
    <div className="adminVideo_main">
      <div className="adminVideo_div">
        <div className="video_div"></div>
        <div className="controllers">
          <div className="icons">
            <div
              className="microphone"
              onClick={() => setMicrIsActive(!micrIsActive)}
            >
              {micrIsActive ? <MicrophoneActive /> : <MicrophoneDisabled />}
            </div>
            <div
              className="video"
              onClick={() => setVideoIsActive(!videoIsActive)}
            >
              {videoIsActive ? <VideoActive /> : <Videodisabled />}
            </div>
            <div
              className="share"
              
            >
              {shareIsActive ? <ShareActive setshareIsActive={setshareIsActive} shareIsActive={shareIsActive}/> : <ShareDisabled setshareIsActive={setshareIsActive} shareIsActive={shareIsActive}/>}
              {shareIsActive ? (
                <div className="share_div">
                  <div className="buttons">
                    <div className={share === "givePermission" ?"active":"disabled"} onClick={()=>setShareSetting("givePermission")}>
                      Give permission
                      <i className="fa-regular fa-key" style={{color:share === "givePermission"?"#0060FF": "black"}}></i>
                    </div>
                    <div className={share === "allowMouse" ?"active":"disabled"} onClick={()=>setShareSetting("allowMouse")}>
                      Allow mouse use
                      <i className="fa-regular fa-computer-mouse" style={{color:share === "allowMouse"?"#0060FF": "black"}}></i>
                      
                    </div>
                  </div>
                  <div className="members_list">
                      <ul>
                        {
                            users.map((user)=><li key={user.id}>
                              <div className='memberItem_main'>
                                  <div className="member">
                                    <div className="member_img">
                                      {user.name.charAt(0)}
                                    </div>
                                    <div className="member_name">{user.name}</div>
                                  </div>
                                </div>
                            </li>)
                        }
                    </ul>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="end">End Call</div>
        </div>
      </div>
    </div>
  );
};

export default AdminVideo;
