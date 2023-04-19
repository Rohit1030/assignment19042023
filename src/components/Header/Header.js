import React from 'react'
import { IoLocationSharp } from "react-icons/io5"
import { GoBell } from "react-icons/go"
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { BsFillMicFill } from "react-icons/bs"
import { FaSearch } from "react-icons/fa"
import "./Header.css"

const Header = () => {
  return (
    <div className='header-container'>
      <div id='header-section-one'>
        <IoLocationSharp className='react-icons'/>
        <div id="location-text">Harhwa Fatak Nirala Nagar, Gorakhput, Nirala Nagar, Uttar Pradesh, 273004, India</div>
        <GoBell className='react-icons'/>
        <MdOutlineAddShoppingCart className='react-icons'/>
      </div>
      <div id='header-section-two'>
        <div id="search-input">
         <FaSearch className='react-icons' />
         <input type="text" id='search-products' name='search-products' placeholder='Search for Products...'/>
        </div>
        <BsFillMicFill className='react-icons' />
      </div>
    </div>
  )
}

export default Header