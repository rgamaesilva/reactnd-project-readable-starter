import {
  GET_ALLPOSTS,
  ADD_POST
} from '../actions/postsActions'

const initialState = {}

function posts (state = initialState, action) {
  const { posts, newPost } = action
  switch (action.type) {
    case GET_ALLPOSTS:
      const postsAsObjects = posts.reduce((accumulator, currentValue) => {
        return {
          ...accumulator,
          [currentValue.id]: currentValue
        }
      }, {})
      return postsAsObjects
    case ADD_POST:
      return newPost
    default:
      return state
  }
}

export default posts;
