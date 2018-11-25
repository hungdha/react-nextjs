import axios from 'axios';
import { SHOW_SEARCH_ENDPOINT } from '../constants/EndpointTypes';
export default{
    fetchAll(params){
        if(params == null ){
            params = { params : {q:'girls'} };
        }
        return axios.get(SHOW_SEARCH_ENDPOINT , params);
    }
}