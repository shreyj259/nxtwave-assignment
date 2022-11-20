import axios from 'axios'

const ADD_API="https://media-content.ccbp.in/website/react-assignment/resources.json"
const SET_API="https://media-content.ccbp.in/website/react-assignment/add_resource.json"

export const getData=async()=>{
    const response=await axios.get(ADD_API);
    return response;
}


export const sendFormData=async()=>{
    const response = await axios.get(SET_API)
    return response;
}

