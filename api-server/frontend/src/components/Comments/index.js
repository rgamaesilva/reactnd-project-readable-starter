import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'
import Post from '../Post'

const Comments = (props) => {

  const commentsAsArray = Object.keys(props.comments).map((key) => (props.comments[key]))

  return (
    <div className="posts-container">
    {props.post &&
      <Post
        posts={props.post}
        onVotePost={props.onVotePost}
      />
    }
    {commentsAsArray &&
      commentsAsArray.map((comment) => {
        if(comment.parentId === props.post.id) {
          return (
            <div className="comment" key={comment.id}>
              <div className="comment-author">{`by ${comment.author} @ ${new Date(comment.timestamp)}`}</div>
              <div className="comment-body">{comment.body}</div>
              <div className="comment-vote">{`${comment.voteScore} VOTES`}</div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default withRouter(Comments);
