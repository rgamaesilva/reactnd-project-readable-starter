import {
  GET_COMMENTS,
} from '../actions/commentsActions'

const initialState = []

function comments (state = initialState, action) {
  const { comments } = action
  switch (action.type) {
    case GET_COMMENTS:
      return comments
    default:
      return state
  }
}

export default comments;
