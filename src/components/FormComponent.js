import React from 'react'
import "react-toastify/dist/ReactToastify.css";
import Loader from './Loader';


const FormComponent = ({handleSubmit,isLoading}) => {


  return (
    <>
    <form className='custom-form' onSubmit={handleSubmit}>
        <label htmlFor="">ITEM NAME</label><br/>
        <input id="item-name" name="name" /> <br/>

        <label htmlFor="">LINK</label><br/>
        <input id="link" name="link" /> <br/>

        <label htmlFor="">RESOURCE NAME</label><br/>
        <input id="resource-name" name="resourceName" /><br/>

        <label htmlFor="">DESCRIPTION</label><br/>
        <textarea id="description" name="description"  rows={3} ></textarea> <br/>

        {isLoading?<Loader/>:<button >CREATE</button>}

    </form>
    </>
  )
}

export default FormComponent