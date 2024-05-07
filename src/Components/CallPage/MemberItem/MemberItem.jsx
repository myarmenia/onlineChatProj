import React from 'react'
import './memberItem.css'

const MemberItem = ({user}) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  return (
    <div className='memberItem_main'>
      <div className="member">
        <div className="member_img" style={{backgroundColor :`rgb(${r}, ${g}, ${b})`}}>
          {user.name.charAt(0)}
        </div>
        <div className="member_name">{user.name}</div>
      </div>

      <div className="controllers">
        
      </div>
    </div>
  )
}

export default MemberItem