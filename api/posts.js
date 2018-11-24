import fetch from 'isomorphic-unfetch';
import {URL} from '../constants/AppConfig';
export default{
    fetchAll(){
        try{
            const res = await fetch(URL+'/search/shows?q=girls');
            // console.log("status code", res.status);
            const data = await res.json();
            const statusCode =  res.status > 200 ? res.status : false;
            return {
                statusCode:statusCode,
                shows: data
            }
           
        }catch(e) {
            console.log('error: ', e);  
            return {
                statusCode : 404,
                data : []
            }
        }
    }
}