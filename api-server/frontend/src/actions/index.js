export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

export function addPost({ title, body, author, timestamp, voteScore, category, id, deleted}) {
  return {
    type: ADD_POST,
    title, body, author, timestamp, voteScore, category, id, deleted
  }
}

export function editPost ({ title, author }) {
  return {
    type: EDIT_POST,
    title,
    author,
  }
}

export function deletePost ({ title, author }) {
  return{
    type: DELETE_POST,
    title,
    author,
  }
}
