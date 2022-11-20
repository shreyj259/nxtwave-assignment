import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FormComponent from '../components/FormComponent'
import '../components/styles/addItem.css'
import { ToastContainer, toast } from "react-toastify";
import { sendFormData } from '../Api';

const AddItemPage = () => {
  const [isLoading,setIsLoading]=useState(false);
  
  const handleSubmit=(e)=>{
    let isValid=true;
    var urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

    e.preventDefault()

    const fields=["name","link","resourceName","description"];

    fields.every(item=>{
      if(e.target[item].value===""){
        toast.error(e.target[item].name + " can't be empty!")
        isValid=false
        return false;
      }
      else return true
    })

    if(!isValid)
    {
      return ;
    }

    if(e.target["name"].value.length<2 || e.target["name"].value.length>15){
    toast.error("Name should be more than 2 characters and less than 15 characters");
    return ;
    }
    
    if(!urlRegex.test(e.target["link"].value)){
      toast.error("Invalid Link!")
      return ;
    }

    if(e.target["resourceName"].value.length<2 || e.target["resourceName"].value.length>15){
    toast.error("Resource name should be more than 2 characters and less than 15 characters");
    return ;
    }

    if(e.target["description"].value.length<20 || e.target["description"].value.length>150){
    toast.error("Description should be more than 20 characters and less than 150 characters");
    return ;
    }

    if(isValid){
      setIsLoading(true)
      sendFormData().then(()=>{
        setIsLoading(false)
        toast.success("Item successfully added !")
      }).catch(()=>{
        setIsLoading(false)
        toast.error("Can't add item right now !")
      })
    }

  }

  return (
    <div className='flex-container '>

        <div className="first-page">
            <Link className="back-container" to="/">
             <span className='arrow'>&lt;</span> Users
            </Link>

                <div className="flex-container form-page">
                <div className="form-container">
                <div className="form-title">
                Item Details
                </div>
                <FormComponent isLoading={isLoading} handleSubmit={handleSubmit}/>
            </div>
            </div>
            
        </div>

        <div className="item-image-container">
            <img src="./src/addItemImage.png" alt="" />
        </div>

        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
    </div>
  )
}

export default AddItemPage