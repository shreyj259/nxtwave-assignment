import React from 'react'

const Pagination = ({ totalPosts,handlePagination,currentPage}) => {
    const pageNumbers=[]
    const postsPerPage=6
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++)
    pageNumbers.push(i);


  return (
     <div className="pagintaion-container flex-container">
        {pageNumbers.map(item=>{
            return <button key={item} className={`${currentPage===item?"active-page":""} pagination-item`} onClick={()=>handlePagination(item)} >{item}</button>
        })}
     </div>
  )
}

export default Pagination