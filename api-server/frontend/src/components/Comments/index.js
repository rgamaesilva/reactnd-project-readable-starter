import React from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'
import Post from '../Post'

const Comments = (props) => {

  const { post, onVotePost, onDeletePost, comments, onChangeEditMode, onDeleteComment, onVoteComment } = props
  const commentsAsArray = Object.keys(comments).map((key) => (comments[key]))

  return (
    <div className="posts-container">
    {post &&
      <Post
        post={post}
        onVotePost={onVotePost}
        onDeletePost={onDeletePost}
        comments={comments.filter((comment) => post.id === comment.parentId)}
        onChangeEditMode={onChangeEditMode}
      />
    }
    <button className='delete-button' onClick={() => window.location.href = `../${post.id}/newComment`}>ADD COMMENT</button>
    {commentsAsArray &&
      commentsAsArray.map((comment) => {
        if(comment.parentId === post.id) {
          return (
            <div className="comment" key={comment.id}>
              <div className="comment-author">{`by ${comment.author} @ ${new Date(comment.timestamp)}`}</div>
              <div className="comment-body">{comment.body}</div>
              <div className="vote-container">
                <button className="vote-increment" onClick={() => onVoteComment({option: "upVote"}, comment.id, 1)}></button>
                <div className="vote-count">{`${comment.voteScore} VOTES`}</div>
                <button className="vote-decrement" onClick={() => onVoteComment({option: "downVote"}, comment.id, -1)}></button>
              </div>
              <div className='edit-container'>
                <button className='edit-button' onClick={() => window.location.href = `../${comment.id}/editComment`}>EDIT</button>
                <button className='delete-button' onClick={() => onDeleteComment(comment.id, true)}>DELETE</button>
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default withRouter(Comments);
