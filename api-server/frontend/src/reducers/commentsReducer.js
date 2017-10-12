import {
  GET_COMMENTS,
} from '../actions/commentsActions'

const initialState = {}

function comments (state = initialState, action) {
  const { comments } = action
  switch (action.type) {
    case GET_COMMENTS:
      const commentsAsObjects = comments.reduce((accumulator, currentValue) => {
        return {
          ...accumulator,
          [currentValue.id]: currentValue
        }
      }, {})
      return Object.assign({}, state, commentsAsObjects)
    default:
      return state
  }
}

export default comments;
