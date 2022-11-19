import React from 'react'

const Card = ({title,icon,link,description,category}) => {
  return (
    <div className='card'>
        <div className="flex-container">
            <div className="card-icon-container">
                <img src={icon} alt={title} />
            </div>
            <div className="card-title-container">
                {title} <br/>
                <span className='card-subtitle-container'>{category}</span>
            </div>
        </div>
        <div className="card-description-container">
            <a href="#" className="card-link">{link}</a> <br/>
            {description}
        </div>
    </div>
  )
}

export default Card