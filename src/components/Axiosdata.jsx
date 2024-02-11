import axios from "axios";



const REST_API_BASE_URL_GET_PNR='http://localhost:8081/api/ticket';
export const getPnrId=(pnr)=>{
    return axios.get(REST_API_BASE_URL_GET_PNR+'/'+pnr);
}

