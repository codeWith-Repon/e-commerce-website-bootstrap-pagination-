import React from 'react'
import { postList, title } from './Data/popularPostData'
import { Link } from 'react-router-dom'

const PopularPost = () => {
  return (
    <div className='widget widget-post'>
      <div className="widget-header">
        <h5 className="title">{title}</h5>
      </div>

      <ul className="widget-wrapper">
        {
            postList.map((blog,index)=>(
                <li key={index} className='d-flex flex-wrap justify-content-between'>
                    <div className="post-thumb">
                        <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} alt="" /></Link>
                    </div>
                    <div className="post-content">
                        <Link to={`/blog/${blog.id}`}><h5>{blog.title}</h5></Link>
                        <p>{blog.date}</p>
                    </div>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default PopularPost
