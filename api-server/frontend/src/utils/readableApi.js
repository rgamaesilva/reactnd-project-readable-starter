const api = 'http://localhost:3001'

// Generate a unique token
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Authorization': token
}

export const getAllCategories = () =>
  fetch(`${api}/categories/`, { headers })
    .then(res => res.json())

export const getAllPosts = () =>
  fetch(`${api}/posts/`, { headers })
    .then(res => res.json())

export const getCategoryPosts = (category) =>
  fetch(`${api}/:${category}/posts/`, { headers })
    .then(res => res.json())

export const getAllCommentsOfPost = (id) =>
  fetch(`${api}/posts/${id}/comments/`, { headers })
    .then(res => res.json())

export const addPost = (id, timestamp, title, body, author, category, voteScore) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, title, body, author, category, voteScore })
  }).then(res => res.json())

export const votePost = (option, postId) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(option)
  }).then(res => res.json())

export const voteComment = (option, commentId) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(option)
  }).then(res => res.json())

export const deletePost = (postId, option) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(option)
  }).then(res => res.json())

export const deleteComment = (commentId, option) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(option)
  }).then(res => res.json())

export const editPost = (postId, title, body) =>
  fetch(`${api}/posts/${postId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title, body})
  }).then(res => res.json())

export const editComment = (commentId, timestamp, body) =>
  fetch(`${api}/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({timestamp, body})
  }).then(res => res.json())

export const addComment = (id, timestamp, body, author, parentId) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, body, author, parentId })
  }).then(res => res.json())
