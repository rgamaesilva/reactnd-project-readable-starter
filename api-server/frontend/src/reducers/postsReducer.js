import {
  GET_ALLPOSTS,
} from '../actions/postsActions'

const initialState = {}

function posts (state = initialState, action) {
  const { posts } = action
  switch (action.type) {
    case GET_ALLPOSTS:
      const postsAsObjects = posts.reduce((accumulator, currentValue) => {
        return {
          ...accumulator,
          [currentValue.id]: currentValue
        }
      }, {})
      return postsAsObjects
    default:
      return state
  }
}

export default posts;
