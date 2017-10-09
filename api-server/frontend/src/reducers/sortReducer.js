import {
  CHANGE_SORT_PROP,
  CHANGE_SORT_ORDER
} from '../actions/sortActions'

const initialState = {
  prop: 'voteScore',
  order: 'ascending',
}

function sortBy (state = initialState, action) {
  const { prop, order } = action
  switch (action.type) {
    case CHANGE_SORT_PROP:
      return {
        ...state,
          prop: prop,
      }
    case CHANGE_SORT_ORDER:
      return {
        ...state,
          order: order,
      }
    default:
      return state
  }
}

export default sortBy;
