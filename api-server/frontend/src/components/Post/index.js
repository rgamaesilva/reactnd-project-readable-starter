import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Post = (props) => {

  const { post, onVotePost, onDeletePost, comments} = props

  return (
    <div key={post.id} className="post">
      <div className="post-category">{post.category}</div>
      <Link to={`/${post.category}/${post.id}`}>
        <div className="post-title">{post.title}</div>
      </Link>
      <div className="post-author">{`by ${post.author} @ ${new Date(post.timestamp)}`}</div>
      <div className="post-body">{post.body}</div>
      <div className="vote-container">
        <button className="vote-increment" onClick={() => onVotePost({option: "upVote"}, post.id, 1)}></button>
        <div className="vote-count">{`${post.voteScore} VOTES`}</div>
        <div className="vote-count">{`${comments.length} COMMENTS`}</div>
        <button className="vote-decrement" onClick={() => onVotePost({option: "downVote"}, post.id, -1)}></button>
      </div>
      <div className='edit-container'>
        <button className='edit-button' onClick={() => window.location.href = `../${post.id}/EditPost`}>EDIT</button>
        <button className='delete-button' onClick={() => onDeletePost(post.id, true)}>DELETE</button>
      </div>
    </div>
  )
}

export default Post;
