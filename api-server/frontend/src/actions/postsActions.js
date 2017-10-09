export const GET_ALLPOSTS = 'GET_ALLPOSTS'
export const ADD_POST = 'ADD_POST'

export function getAllPosts ( posts ) {
  return {
    type: GET_ALLPOSTS,
    posts,
  }
}

export function addPosts ( newPost ) {
  return {
    type: ADD_POST,
    newPost,
  }
}
