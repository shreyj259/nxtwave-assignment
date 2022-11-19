import React from 'react'
import Card from './Card'
import './styles/cardcontainer.css'

const CardContainer = ({data,searchQuery}) => {
  return (
    <div className="flex-container card-container">
        {data.filter(item=>item.title.toLowerCase().includes(searchQuery.toLowerCase())).map(item=>{
         return <Card key={item.id} title={item.title} icon={item.icon_url} link={item.link} description={item.description} category={item.category} />
        })}
    </div>
  )
}

export default CardContainer