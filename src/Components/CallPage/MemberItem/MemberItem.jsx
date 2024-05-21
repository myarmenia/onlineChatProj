import React from 'react'
import './memberItem.css'

const MemberItem = ({user}) => {
  function getRandomColor() {
    let color;
    do {
      color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    } while (color.toUpperCase() === 'FFFFFF');
  
    return `#${color}`;
  }
  
  return (
    <div className='memberItem_main'>
      <div className="member">
        <div className="member_img" style={{backgroundColor :getRandomColor()}}>
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