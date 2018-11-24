import { FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAILURE } from "../constants/ActionTypes";

export const fetchPostsRequest = () => ({
    type : FETCH_POSTS_REQUEST
})
export const fetchPostsSuccess = (posts) => ({
    type : FETCH_POSTS_SUCCESS,
    payload : posts
})
export const fetchPostsFailure = (error) => ({
    type : FETCH_POSTS_FAILURE,
    payload : error
})

export function fetchPosts(params){
    return function(dispatch){
        dispatch(fetchPostsRequest());
        return 
    }
}