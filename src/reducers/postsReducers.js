export default (state = [], action) => {     //previous data + action = new state.
    //mutating the input in the reducers is strictly not allowed.
    //for e.g. :- state[0] = "hetav" ---> hardcoding vlaues like these is not allowed inside the reducer.
    //basically we cannot the change the input parameters in any way.
    
    /* if (action.type === "FETCH_POSTS") {
        return action.payload;
    }

    return state; */
    /*Mutations are possible by the methods shown in the video 268 */
    switch (action.type) { 
        case "FETCH_POSTS" : 
            return action.payload;
        default : 
            return state;
    }
    
};