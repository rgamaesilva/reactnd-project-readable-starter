import {
  GET_COMMENTS,
  CHANGE_COMMENT_VOTE_SCORE,
  DELETE_COMMENT
} from '../actions/commentsActions'

const initialState = {}

function comments (state = initialState, action) {
  const { comments,  commentId, voteChangeValue, deleted } = action
  switch (action.type) {
    case GET_COMMENTS:
// transform comments from an array to an object.
      const commentsAsObjects = comments.reduce((accumulator, currentValue) => {
        return {
          ...accumulator,
          [currentValue.id]: currentValue
        }
      }, {})
// add the comments to the object.
      return Object.assign({}, state, commentsAsObjects)
    case CHANGE_COMMENT_VOTE_SCORE:
  // update state changing only the voteScore to a voteChangeValue const.
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          voteScore: state[commentId].voteScore + voteChangeValue
        }
      }
    case DELETE_COMMENT:
      return{
        ...state,
        [commentId]: {
          ...state[commentId],
          deleted: deleted
        }
      }
    default:
      return state
  }
}

export default comments;
