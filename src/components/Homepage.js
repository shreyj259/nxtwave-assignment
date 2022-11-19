import React, { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup'
import Seach from './Seach'
import {getData} from '../Api/index'
import CardContainer from './CardContainer'
import Pagination from './Pagination'

const Homepage = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [data,setData]=useState([]);
  const [displayData,setDisplayData]=useState([])
  const [selectedTag,setSelectedTag]=useState("resources")
  const [errorMessage,setErrorMessage]=useState("");
  const [loading,setLoading]=useState(false);

  const [currentPage,setCurrentPage]=useState(1);
  const postsPerPage=6
  let indexOfLastPost=currentPage*postsPerPage;
  let indexOfFirstPost=indexOfLastPost-postsPerPage;

  const handleBtnClick=(tag)=>{
    if(tag===selectedTag)
    return ;
    setSelectedTag(tag);
    setSearchQuery("");
    setCurrentPage(1);
  }

  const handlePagination=(num)=>{
    setCurrentPage(num);
  }

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
    let temp=data;

    temp=temp.filter(item=>{
      if(selectedTag==="resources")
      return item
      else{
        if(selectedTag===item.tag)
        return item;
      }
    }).filter(item=>item.title.toLowerCase().includes(searchQuery.toLowerCase()))

    setDisplayData(temp);

  },[selectedTag,searchQuery])

  


  return (
    <div className="outer-container">
        <ButtonGroup selectedTag={selectedTag} handleBtnClick={handleBtnClick} />
        <Seach searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <CardContainer data={displayData} indexOfLastPost={indexOfLastPost} indexOfFirstPost={indexOfFirstPost}/>
        <Pagination  totalPosts={displayData.length} handlePagination={handlePagination} currentPage={currentPage}/>
    </div>
  )
}

export default Homepage