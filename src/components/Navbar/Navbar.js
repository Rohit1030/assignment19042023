import React from 'react'
import "./Navbar.css"
import { AiFillHome } from "react-icons/ai"
import { BsFillPeopleFill, BsFillChatDotsFill } from "react-icons/bs"
import { FaClipboardList } from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-link">
            <AiFillHome className='nav-icon' />
            <p>Home</p>
        </div>
        <div className="nav-link">
            <BsFillPeopleFill className='nav-icon' />
            <p>Profile</p>
        </div>
        <div id="company-icon">
            <img src="https://reallygooddesigns.com/wp-content/uploads/2022/02/Free-Cartoon-Icons-Cute-Astronaut-Flying-on-a-Rocket-Free-Icon.png" alt="logo" id='nav-img' />
        </div>
        <div className="nav-link">
            <FaClipboardList className='nav-icon' />
            <p>Follow List</p>
        </div>
        <div className="nav-link">
            <BsFillChatDotsFill className='nav-icon' />
            <p>Chat</p>
        </div>
    </div>
  )
}

export default Navbar