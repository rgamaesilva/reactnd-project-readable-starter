export const GET_ALLPOSTS = 'GET_ALLPOSTS'
export const ADD_POST = 'ADD_POST'
export const CHANGE_POST_VOTE_SCORE = 'CHANGE_POST_VOTE_SCORE'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'

export function getAllPosts ( posts ) {
  return {
    type: GET_ALLPOSTS,
    posts,
  }
}

export function addPost ( {newPost} ) {
  return {
    type: ADD_POST,
    newPost,
  }
}

export function changePostVoteScore ( {postId, voteChangeValue} ) {
  return{
    type: CHANGE_POST_VOTE_SCORE,
    postId,
    voteChangeValue,
  }
}

export function deletePost ( {postId, deleted} ) {
  return{
    type: DELETE_POST,
    postId,
    deleted,
  }
}

export function editPost ({postId, title, body}) {
  return {
    type: EDIT_POST,
    postId,
    title,
    body
  }
}
