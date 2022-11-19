import axios from 'axios'

const ADD_API="https://media-content.ccbp.in/website/react-assignment/resources.json"

export const getData=async()=>{
    const response=await axios.get(ADD_API);
    return response;
}

