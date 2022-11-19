import React from 'react'

const ButtonGroup = ({selectedTag,setSelectedTag}) => {

  const handleClick=(tag)=>{
    if(tag===selectedTag)
    return ;
    setSelectedTag(tag);
  }

  return (
    <div className='btn-group'>
        <button onClick={()=>handleClick("resources")} className={`${selectedTag==="resources"?"active-btn":""}`}>
        Resources
        </button>
        <button onClick={()=>handleClick("request")} className={`${selectedTag==="request"?"active-btn":""}`}>
        Requests
        </button>
        <button onClick={()=>handleClick("user")} className={`${selectedTag==="user"?"active-btn":""}`}>
        Users
        </button>
    </div>
  )
}

export default ButtonGroup