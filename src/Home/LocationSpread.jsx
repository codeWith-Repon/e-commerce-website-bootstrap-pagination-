import React from 'react'
import { clientsList, desc, title } from './clientList'
import { Link } from 'react-router-dom'

const LocationSpread = () => {
  return (
    <div className='clients-section style-2 padding-tb'>
      <div className="container">
        <div className="section-header text-center">
          <h2 className="title">{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="section-wrapper">
          <div className="clients">
            {
              clientsList.map((value,index)=>(
                <div key={index} className="client-list">
                  <Link to='/sign-up' className='client-content'>
                  <span>{value.text}</span>
                  </Link>
                  <div className="client-thumb">
                    <img src={value.imgUrl} />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationSpread
