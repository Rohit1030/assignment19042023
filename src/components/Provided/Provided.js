import React from 'react'
import services from "../Data/services.json"
import "./Provided.css"

const Provided = () => {
  return (
    <div className='provided-services'>
        <h1>Services We Provide</h1>
        <div className="provided-services-container">
            {services.providedServices.map((item, index) => {
                return (
                    <div className="service-provided" key={index}>
                        <div className="percent">20% Off</div>
                        <img src={item.image} alt={item.name} className="img-service" />
                        <div className="provided-overlay"></div>
                        <h1>{item.name}</h1>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Provided