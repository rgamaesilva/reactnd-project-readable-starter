import {
  GET_CATEGORIES,
} from '../actions/categoriesActions'

const initialState = []

function categories (state = initialState, action) {
  const { categories } = action
  switch (action.type) {
    case GET_CATEGORIES:
      return categories
    default:
      return state
  }
}

export default categories;
