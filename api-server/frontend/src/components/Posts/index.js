import React from 'react'
import './index.css'

const Posts = (props) => {
  return (
    <div className="posts-container">
      {props.posts.map((post) =>
        <div key={post.id} className="post">
          <div className="post-category">{post.category}</div>
          <div className="post-title">{post.title}</div>
          <div className="post-author">{`by ${post.author} @ ${Date(post.timestamp)}`}</div>
          <div className="post-body">{post.body}</div>
          <div className="post-vote">{`${post.voteScore} VOTES`}</div>
        <div className="post-add">
            <input
              type="text"
              placeholder="Add new comment"
              />
              <button>POST</button>
        </div>
        </div>
      )}
    </div>
  )
}

export default Posts;
