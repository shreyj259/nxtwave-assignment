import React, { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup'
import Seach from './Seach'
import {getData} from '../Api/index'
import CardContainer from './CardContainer'

const Homepage = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [data,setData]=useState([]);
  const [displayData,setDisplayData]=useState([])
  const [selectedTag,setSelectedTag]=useState("resources")
  const [errorMessage,setErrorMessage]=useState("");
  const [loading,setLoading]=useState(false);


  useEffect(()=>{
    setLoading(true);
    getData().then(response=>{
      setData(response.data)
      setDisplayData(response.data)
      setLoading(false)
    }).catch(()=>{
      setErrorMessage("Can't Fetch Data");
      setLoading(false);
    }
    )
  },[])


  useEffect(()=>{
    let temp;
    if(selectedTag==="resources"){
      setDisplayData(data);
      setSearchQuery("")
    }else if(selectedTag==="request"){
      temp=data.filter(item=>item.tag==="request")
      setDisplayData(temp)
      setSearchQuery("")
    }else{
      temp=data.filter(item=>item.tag==="user")
      setDisplayData(temp)
      setSearchQuery("")
    }
  },[selectedTag])


  return (
    <div className="outer-container">
        <ButtonGroup selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
        <Seach searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <CardContainer searchQuery={searchQuery} data={displayData}/>
    </div>
  )
}

export default Homepage