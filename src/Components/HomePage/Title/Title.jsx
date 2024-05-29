import React from 'react'
import './title.css'
import { get_user_cookies } from '../../../Utils/accountUtils'


const Title = () => {
  function getRandomColor() {
    let r, g, b;
  
    do {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
    } while (Math.abs(r - g) < 30 && Math.abs(g - b) < 30 && Math.abs(b - r) < 30);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const signOutFunc = ()=>{
    window.location = "http://localhost:4001/logout"
  }

  return (
    <div className="title_main">
        <div className='container'>
          <div className="title">MEETING</div>
            
          {
            get_user_cookies.name ? <div className='user_main'> <div className="user_div">

                <div className="img" style={{background: getRandomColor()}}>{get_user_cookies.name.charAt(0).toUpperCase()}</div>
                <p>{get_user_cookies.name}</p>
      
              </div> 
              <div className="signOut" onClick={signOutFunc}>Sign Out</div>
              </div>
              : ""
          }

        </div>

    </div>
  )
}

export default Title