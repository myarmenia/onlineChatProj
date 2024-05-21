import React from 'react'
import './title.css'
import { useParams } from 'react-router-dom'

const Title = () => {
  const {username} = useParams()
  const randomColor =`#${Math.floor(Math.random()*16777215).toString(16)}`;
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
    window.location = "/"
  }

  return (
    <div className="title_main">
        <div className='container'>
          <div className="title">MEETING</div>
            
          {
            username ? <div className='user_main'> <div className="user_div">

                <div className="img" style={{background: getRandomColor()}}>{username.charAt(0).toUpperCase()}</div>
                <p>{username}</p>
      
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