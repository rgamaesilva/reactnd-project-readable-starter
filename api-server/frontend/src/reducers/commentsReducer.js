import {
  GET_COMMENTS,
  CHANGE_COMMENT_VOTE_SCORE,
  DELETE_COMMENT,
  DELETE_PARENT_COMMENT,
  EDIT_COMMENT,
  ADD_COMMENT
} from '../actions/commentsActions'

const initialState = {}

function comments (state = initialState, action) {
  const { comments,  commentId, voteChangeValue, deleted, parentDeleted, timestamp, body, newComment } = action
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
    case DELETE_PARENT_COMMENT:
      return{
        ...state,
        [commentId]: {
          ...state[commentId],
          parentDeleted: parentDeleted
        }
      }
    case EDIT_COMMENT:
// return state with the new timestamp and body
      return {
        ...state,
        [commentId]: {
          ...state[commentId],
          timestamp,
          body
        }
      }
    case ADD_COMMENT:
// create newComment as an object with its id in front and them merge with the existing comments (state)
      const newCommentObject = {[newComment.id]: newComment}
      const newComments = Object.assign({}, state, newCommentObject)
      return newComments
    default:
      return state
  }
}

export default comments;
