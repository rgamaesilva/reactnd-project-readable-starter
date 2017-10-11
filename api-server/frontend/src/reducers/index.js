import { combineReducers } from 'redux'
import categories from './categoriesReducer'
import posts from './postsReducer'
import comments from './commentsReducer'
import sortBy from './sortReducer'

export default combineReducers({
  categories,
  posts,
  comments,
  sortBy
})
