import axios from "axios";

const API_URL = '';

export const addIssue = async (data) =>{
    try{
        return await axios.post(API_URL, data)
    } catch(error) {
        console.log('error while calling api', error.message);
    }
}




