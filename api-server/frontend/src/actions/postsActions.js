export const GET_ALLPOSTS = 'GET_ALLPOSTS'

export function getAllPosts ( posts ) {
  return {
    type: GET_ALLPOSTS,
    posts,

  }
}
