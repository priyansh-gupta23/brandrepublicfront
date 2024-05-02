import axios from "@/utils/axios";
import { toast } from "react-toastify";
import {addquery,iserror,removeerror} from "../Reducers/queryreducer"


export const asyncquery =(query) => async(dispatch,getState) => {
    try {
        const {data} = await axios.post("/query",query);
        console.log(data);
        
    } catch (error) {
        dispatch(iserror(error.response.data.message));
        
    }    
}