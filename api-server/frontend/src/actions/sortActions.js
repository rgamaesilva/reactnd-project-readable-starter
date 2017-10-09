export const CHANGE_SORT_PROP = 'CHANGE_SORT_PROP'
export const CHANGE_SORT_ORDER = 'CHANGE_SORT_ORDER'

export function changeSortProp ( prop ) {
  return {
    type: CHANGE_SORT_PROP,
    prop,
  }
}

export function changeSortOrder ( order ) {
  return {
    type: CHANGE_SORT_ORDER,
    order,
  }
}
