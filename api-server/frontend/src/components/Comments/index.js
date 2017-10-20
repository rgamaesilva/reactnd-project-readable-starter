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
        post={props.post}
        onVotePost={props.onVotePost}
        onDeletePost={props.onDeletePost}
        comments={props.comments.filter((comment) => props.post.id === comment.parentId)}
        editMode={props.editMode}
        onChangeEditMode={props.onChangeEditMode}
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
              <div className="vote-container">
                <button className="vote-increment" onClick={() => props.onVoteComment({option: "upVote"}, comment.id, 1)}></button>
                <div className="vote-count">{`${comment.voteScore} VOTES`}</div>
                <button className="vote-decrement" onClick={() => props.onVoteComment({option: "downVote"}, comment.id, -1)}></button>
              </div>
              <div className='edit-container'>
                <button className='edit-button' onClick={() => window.location.href = `../${comment.id}/editComment`}>EDIT</button>
                <button className='delete-button' onClick={() => props.onDeleteComment(comment.id, true)}>DELETE</button>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default withRouter(Comments);
