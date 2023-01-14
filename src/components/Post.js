//import { useState } from "react"
import { useReducer } from "react"
import { INITIAL_STATE, postReducer } from "./Reducers/postReducer"
import ACTION_TYPES from "./Reducers/postActionType"

function Post() {
    // const [loading, setLoading] = useState(false)
    // const [post, setPost] = useState({})
    // const [error, setError] = useState(false)
    const [state,dispatch]=useReducer(postReducer,INITIAL_STATE)

    function handleFetch() {
        dispatch({type:ACTION_TYPES.FETCH_START})
        // setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
            return response.json()
            })
            .then((data) => {
            dispatch({type:ACTION_TYPES.FETCH_SUCCESS,payload:data})
        })
            .catch(err => {
                dispatch({type:ACTION_TYPES.FETCH_ERROR})
        })
     }
    
  return (
      <div>
          <button onClick={handleFetch}>
          {
              state.loading ? 'Waiting for data ....':'fetch the post'
          }
          </button>
          <p>{state.post?.title}</p>
          <span>{state.error && "something went wrong" }</span>
      </div>
  )
}

export default Post