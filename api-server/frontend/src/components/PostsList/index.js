import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const PostsList = (props) => {

  return (
    <div className="posts-container">
      {props.posts.length > 0 && props.posts.map((post) =>
        <div key={post.id} className="post">
          <div className="post-category">{post.category}</div>
          <Link to={`/${post.id}`}>
            <div className="post-title">{post.title}</div>
          </Link>
          <div className="post-author">{`by ${post.author} @ ${Date(post.timestamp)}`}</div>
          <div className="post-body">{post.body}</div>
          <div className="post-vote">{`${post.voteScore} VOTES`}</div>
        </div>
      )}
    </div>
  )
}

export default PostsList;
