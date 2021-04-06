import jsonPlace from "../apis/jsonPlace";

export const fetchPosts = () => {

    return async (dispatch, getState) => {  //here the dispatch is actually a function that intitiates changes to the state.   
        const response = await jsonPlace.get("/posts");
        

        dispatch({
            type: "FETCH_POSTS",
            payload: response
        });
    };
};

