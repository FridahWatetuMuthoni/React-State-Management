import ACTION_TYPES from "./postActionType";

export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false
};
// A reducer takes in the initial state and an action and then it returns an updated form of state
 export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        loading: true,
        error: false,
        post:{}
      }
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        loading: false,
        error: false,
        post:action.payload
      }
    case ACTION_TYPES.FETCH_ERROR:
      return {
        loading: false,
        error: true,
        post:{}
      }
    default:
      return state
  }
}

/*
USING ELSE IF STATEMENTS INSTEAD OF SWITCH
if (action.type === 'FETCH_START') {
    return {
      loading: true,
      error: false,
      post:{}
    }
  }
  else if (action.type === 'FETCH_SUCCESS') {
    return {
      loading: false,
      error: false,
      post:action.payload
    }
  }
  else if (action.type === 'FETCH_ERROR') {
    return {
      loading: false,
      error: true,
      post:{}
    }
  }

*/