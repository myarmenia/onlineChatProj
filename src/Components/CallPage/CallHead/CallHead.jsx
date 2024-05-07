import React, { useState } from 'react'
import './callHead.css'
import logo from '../../../Images/Mask group.png'
import { users } from '../../../users'

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

const CallHead = () => {
    const [isOpen, setIsOpen] = useState(false)
    const date =  new Date()
    const sliceUsers = users.slice(0,4)

  return (
    <div className='callHead_div'>
        <div className="callHead_cont container">
            <div className="img_div">
                <img src={logo} alt="" />
            </div>
            <div className="date">
                <h5>[Internal] Weekly Report Marketing   </h5>
                <p>{month[date.getMonth()]} {date.getDate()+"th"}, {date.getFullYear()} | {date.toLocaleTimeString()}</p>
            </div>
            <div className="contacts"
            style={{
                overflowX : isOpen ? "scroll" : "hidden",
                alignItems : isOpen ? "flex-start": "flex-end"
            }}
            >
                {
                    isOpen ?<> {users.map((u)=>
                    <div className='userItem' key={u.id}>
                        <div className="user_img">{u.name.charAt(0)}</div>
                        <p style={{display: isOpen? "flex": "none"}}>{u.name}</p>
                    </div>

                ) }<div className='more_i' onClick={()=>setIsOpen(false)}>Mmi</div>  </> : <>{sliceUsers.map((u)=>
                <div className='sliceUserItem ' key={u.id}>
                   {u.name.charAt(0)}
                </div>
            )}<div className='more' onClick={()=>setIsOpen(true)}>+{users.length - 4}</div>
            </>
                }
            </div>
            <div className="link">
            <svg
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
              </svg> 
              |
              <p>Cem-jnmt-hsu</p>
            </div>

            <div className="user">
                <div className="img">E</div>
                <p>User Name</p>
            </div>
        </div>
    </div>
  )
}

export default CallHead