export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_ALLPOSTS = 'GET_ALLPOSTS'
export const GET_COMMENTS = 'GET_COMMENTS'

export function addPost({ title, body, author, timestamp, voteScore, category, id, deleted }) {
  return {
    type: ADD_POST,
    title, body, author, timestamp, voteScore, category, id, deleted
  }
}

export function editPost ({ title, body, author, timestamp, voteScore, category, id, deleted }) {
  return {
    type: EDIT_POST,
    title, body, author, timestamp, voteScore, category, id, deleted
  }
}

export function deletePost ({ title, body, author, timestamp, voteScore, category, id, deleted }) {
  return {
    type: DELETE_POST,
    title, body, author, timestamp, voteScore, category, id, deleted
  }
}

export function addComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: ADD_COMMENT,
    id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted,
  }
}

export function editComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: EDIT_COMMENT,
    id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted,
  }
}

export function deleteComment ({ id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted }) {
  return {
    type: DELETE_COMMENT,
    id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted,
  }
}

export function getCategories ( categories ) {
  return {
    type: GET_CATEGORIES,
    categories
  }
}
