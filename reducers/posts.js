
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from '../constants/ActionTypes';
const post = {
    "id": 139,
    "url": "http://www.tvmaze.com/shows/139/girls",
    "name": "Girls",
    "type": "Scripted",
    "language": "English",
    "genres": [
      "Drama",
      "Romance"
    ],
    "status": "Ended",
    "runtime": 30,
    "premiered": "2012-04-15",
    "officialSite": "http://www.hbo.com/girls",
    "schedule": {
      "time": "22:00",
      "days": [
        "Sunday"
      ]
    },
    "rating": {
      "average": 6.7
    },
    "weight": 92,
    "network": {
      "id": 8,
      "name": "HBO",
      "country": {
        "name": "United States",
        "code": "US",
        "timezone": "America/New_York"
      }
    },
    "webChannel": null,
    "externals": {
      "tvrage": 30124,
      "thetvdb": 220411,
      "imdb": "tt1723816"
    },
    "image": {
      "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
      "original": "http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
    },
    "summary": "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>",
    "updated": 1542267272,
    "_links": {
      "self": {
        "href": "http://api.tvmaze.com/shows/139"
      },
      "previousepisode": {
        "href": "http://api.tvmaze.com/episodes/1079686"
      }
    }
}
const initialState = {
    posts : { items : null, error : null, loading : false}
}

  
// REDUCERS
 const posts = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST : 
            return {
                ...state,
                posts :{
                    loading : true
                }
            }
        case FETCH_POSTS_SUCCESS : 
            return state;
        case FETCH_POSTS_FAILURE:
            return state;
        default: 
            return state
    }
}
export default posts;