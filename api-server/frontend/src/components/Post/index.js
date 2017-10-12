import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Post = (props) => {

  console.log(props)

  return (
    <div key={props.posts.id} className="post">
      <div className="post-category">{props.posts.category}</div>
      <Link to={`/${props.posts.category}/${props.posts.id}`}>
        <div className="post-title">{props.posts.title}</div>
      </Link>
      <div className="post-author">{`by ${props.posts.author} @ ${new Date(props.posts.timestamp)}`}</div>
      <div className="post-body">{props.posts.body}</div>
      <div className="vote-container">
        <button className="vote-increment" onClick={() => props.onUpVotePost("upVote", props.posts.id)}></button>
        <div className="vote-count">{`${props.posts.voteScore} VOTES`}</div>
        <button className="vote-decrement"></button>
      </div>
    </div>
  )
}

export default Post;
