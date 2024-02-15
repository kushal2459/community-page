import axios from "axios";

const API_URL = 'http://localhost:3002/issues';

export const addIssue = async (data) =>{
    try{
        return await axios.post(API_URL, data)
    } catch(error) {
        console.log('error while calling api', error.message);
    }
}

export const getIssue = async () => {
    try {
        return await axios.get(API_URL);
    } catch (error) {
        console.log("error while getting issues", error.message)
    }
}



