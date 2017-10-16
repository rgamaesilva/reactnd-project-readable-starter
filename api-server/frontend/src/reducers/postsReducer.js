import {
  GET_ALLPOSTS,
  ADD_POST,
  CHANGE_POST_VOTE_SCORE,
  DELETE_POST
} from '../actions/postsActions'

const initialState = {}

function posts (state = initialState, action) {
  const { posts, newPost, postId, voteChangeValue, deleted} = action
  switch (action.type) {
    case GET_ALLPOSTS:
//transform the post array to an object.
      const postsAsObjects = posts.reduce((accumulator, currentValue) => {
        return {
          ...accumulator,
          [currentValue.id]: currentValue
        }
      }, {})
      return postsAsObjects
    case ADD_POST:
      return newPost
    case CHANGE_POST_VOTE_SCORE:
// update state changing only the voteScore to a voteChangeValue const.
      return {
        ...state,
        [postId]: {
          ...state[postId],
          voteScore: state[postId].voteScore + voteChangeValue
        }
      }
    case DELETE_POST:
      return{
        ...state,
        [postId]: {
          ...state[postId],
          deleted: deleted
        }
      }
    default:
      return state
  }
}

export default posts;
