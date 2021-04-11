import _ from "lodash";
import jsonPlace from "../apis/jsonPlace";


export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());

        const userIds = _.uniq(_.map(getState().posts, "userId"));
        userIds.forEach((id) => {
            dispatch(fetchUser(id));
        });
    };
};

export const fetchPosts = () => {

    return async (dispatch) => {  //here the dispatch is actually a function that intitiates changes to the state.   
        const response = await jsonPlace.get("/posts");
        

        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        });
    };
};


export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlace.get(`/users/${id}`);
        dispatch({
            type: "FETCH_USERS", 
            payload: response.data
        });    
    }; 
};

/* const _fetchUser = _.memoize(async(id, dispatch) => {
    const response = await jsonPlace.get(`/users/${id}`);
    dispatch({
        type: "FETCH_USERS", 
        payload: response.data
    });
}); */