import React from 'react'
import { tagsList, title } from './Data/tagsData'

const Tags = () => {
  return (
    <div className='widget widget-tags'>
      <div className="widget-header">
        <h5 className='title'>{title}</h5>
      </div>
      <ul className="widget-wrapper">
        {
            tagsList.map((val,i)=>(
                <li key={i}><a href={val.i}>{val.text}</a></li>
            ))
        }
      </ul>
    </div>
  )
}

export default Tags
