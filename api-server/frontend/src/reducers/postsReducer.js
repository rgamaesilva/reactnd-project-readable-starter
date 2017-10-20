import {
  GET_ALLPOSTS,
  ADD_POST,
  CHANGE_POST_VOTE_SCORE,
  DELETE_POST,
  EDIT_POST
} from '../actions/postsActions'

const initialState = {}

function posts (state = initialState, action) {
  const { posts, newPost, postId, voteChangeValue, deleted, title, body } = action
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
// create newpost as an object with its id in front and them merge with the existing posts (state)
      const newPostObject = {[newPost.id]: newPost}
      const newPosts = Object.assign({}, state, newPostObject)
      return newPosts
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
      return {
        ...state,
        [postId]: {
          ...state[postId],
          deleted: deleted
        }
      }
    case EDIT_POST:
// return state with the new title and body
      return {
        ...state,
        [postId]: {
          ...state[postId],
          title,
          body
        }
      }
    default:
      return state
  }
}

export default posts;
