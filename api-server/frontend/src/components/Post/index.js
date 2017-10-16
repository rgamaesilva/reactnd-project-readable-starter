import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Post = (props) => {
  return (
    <div key={props.post.id} className="post">
      <div className="post-category">{props.post.category}</div>
      <Link to={`/${props.post.category}/${props.post.id}`}>
        <div className="post-title">{props.post.title}</div>
      </Link>
      <div className="post-author">{`by ${props.post.author} @ ${new Date(props.post.timestamp)}`}</div>
      <div className="post-body">{props.post.body}</div>
      <div className="vote-container">
        <button className="vote-increment" onClick={() => props.onVotePost({option: "upVote"}, props.post.id, 1)}></button>
        <div className="vote-count">{`${props.post.voteScore} VOTES`}</div>
        <div className="vote-count">{`${props.comments.length} COMMENTS`}</div>
        <button className="vote-decrement" onClick={() => props.onVotePost({option: "downVote"}, props.post.id, -1)}></button>
      </div>
      <div className='edit-container'>
        <button className='edit-button' onClick={() => window.location.href = `../${props.post.id}/updatePost`}>EDIT</button>
        <button className='delete-button' onClick={() => props.onDeletePost(props.post.id, "true")}>DELETE</button>
      </div>
    </div>
  )
}

export default Post;
