import { FETCH_SHOWS_REQUEST, 
    FETCH_SHOWS_SUCCESS, 
    FETCH_SHOWS_FAILURE } from "../constants/ActionTypes";
import { services } from "../api";

export const fetchShowsRequest = () => ({
    type : FETCH_SHOWS_REQUEST
})
export const fetchShowsSuccess = (shows) => ({
    type : FETCH_SHOWS_SUCCESS,
    payload : shows
})
export const fetchShowsFailure = (error) => ({
    type : FETCH_SHOWS_FAILURE,
    payload : error
})

export function fetchShows(params){
    return function(dispatch){
        dispatch(fetchShowsRequest());
        return services.shows.fetchAll(params).then( (response) => {
            if(response.error)
                dispatch(fetchShowsFailure(response.error.data))
            else
                dispatch(fetchShowsSuccess(response.data))
        }).catch( (error) => {
            dispatch(fetchShowsFailure(error.message))
        }) 
    }
}