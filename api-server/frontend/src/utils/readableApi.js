
const api = 'http://localhost:3001'


// Generate a unique token for storing your bookshelf data on the backend server.
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

// export const getPostComments = () =>
//   fetch(`${api}/posts/:id/comments/`, { headers })
//     .then(res => res.json())

// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)
//
// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())
//
export const addPost = (id, timestamp, title, author, body, category) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, timestamp, title, author, body, category })
  }).then(res => res.json())
