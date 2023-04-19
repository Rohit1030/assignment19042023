import React from 'react'
import { ImMobile } from "react-icons/im"
import { CgScreen } from "react-icons/cg"
import { TbCoinRupee } from "react-icons/tb"
import { HiOutlineSpeakerphone } from "react-icons/hi"
import { BsNewspaper } from "react-icons/bs"
import { SiBlogger } from "react-icons/si"
import { RiFeedbackLine } from "react-icons/ri" 
import { BsFire } from "react-icons/bs"
import { FaRegLightbulb } from "react-icons/fa"
import { MdPeopleOutline } from "react-icons/md"
import { BsDropletFill } from "react-icons/bs"
import { IoIosArrowDroprightCircle } from "react-icons/io"
import "./Services.css"

const Services = () => {
  return (
    <div className='services-container'>
        <div className="service">
            <ImMobile className="service-icon" />
            <p>Prepaid Mobile Recharge</p>
        </div>
        <div className="service">
            <CgScreen className="service-icon" />
            <p>DTH Recharge</p>
        </div>
        <div className="service">
            <TbCoinRupee className="service-icon" />
            <p>Loans</p>
        </div>
        <div className="service">
            <HiOutlineSpeakerphone className="service-icon" />
            <p>Promotion</p>
        </div>
        <div className="service">
            <BsNewspaper className="service-icon" />
            <p>News</p>
        </div>
        <div className="service">
            <SiBlogger className="service-icon" />
            <p>Blog</p>
        </div>
        <div className="service">
            <MdPeopleOutline className="service-icon" />
            <p>Jobs</p>
        </div>
        <div className="service">
            <RiFeedbackLine className="service-icon" />
            <p>Feedback</p>
        </div>
        <div className="service">
            <BsFire className="service-icon" />
            <p>Gas Booking</p>
        </div>
        <div className="service">
            <FaRegLightbulb className="service-icon" />
            <p>Electricity Bill</p>
        </div>
        <div className="service">
            <BsDropletFill className="service-icon" />
            <p>Water Bill</p>
        </div>
        <div className="service">
            <IoIosArrowDroprightCircle className="service-icon" />
            <p>See More</p>
        </div>
    </div>
  )
}

export default Services