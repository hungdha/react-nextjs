
import {
    FETCH_SHOWS_REQUEST,
    FETCH_SHOWS_SUCCESS,
    FETCH_SHOWS_FAILURE
} from '../constants/ActionTypes';

const initialState = { items : null, error : null, loading : false, counter : 0 }

  
// REDUCERS
 const shows = (state = initialState, action) => {
   console.log('reducers', action.type)
    switch (action.type) {
        case FETCH_SHOWS_REQUEST : 
            return Object.assign({}, state, {
              loading : true, counter : 1
            });
           
        case FETCH_SHOWS_SUCCESS : 
            return Object.assign({}, state, {
              loading : false,
              items : action.payload,
              counter : 2
            });    
       
        case FETCH_SHOWS_FAILURE:
            
            return Object.assign({}, state, {
              error  : action.payload,
              loading : false
            });
        default: 
            return state
    }
}
export default shows;