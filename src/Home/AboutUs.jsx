import React from 'react'
import { countList, subTitle,desc,title, btnText } from './about'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import instructor from '/src/assets/images/instructor/01.png'

const AboutUs = () => {
  return (
    <div className='instructor-section style-2 padding-tb section-bg-ash'>
      <div className="container">
        <div className="section-wrapper">
            <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div className="col">
                    {
                        countList.map((value,index)=>(
                            <div key={index} className="count-item">
                                <div className="count-inner">
                                    <div className="count-icon">
                                        <i className={value.iconName}></i>
                                    </div>
                                    <div className="count-content">
                                        <h2>
                                            <span className='count'><CountUp end={value.count} /></span>
                                            <span>+</span>
                                        </h2>
                                        <p>{value.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="col">
                    <div className="instructor-content">
                        <span className='subtitle'>{subTitle}</span>
                        <h2 className="title">{title}</h2>
                        <p>{desc}</p>
                        <Link to='/sign-up' className="lab-btn">{btnText}</Link>
                    </div>
                </div>

                <div className="col">
                    <div className="instructor-thumb">
                    <img src={instructor} alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
