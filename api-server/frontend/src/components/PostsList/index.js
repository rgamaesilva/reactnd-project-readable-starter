import React from 'react'
import './index.css'
import Post from '../Post'

const PostsList = (props) => {

  return (
    <div className="posts-container">
      {props.posts.length > 0 && props.posts.map((post) =>
        <Post
          post={post}
          key={post.id}
          onVotePost={props.onVotePost}
          onDeletePost={props.onDeletePost}
          comments={props.comments.filter((comment) => post.id === comment.parentId)}
          editMode={props.editMode}
          onChangeEditMode={props.onChangeEditMode}
        />
      )}
    </div>
  )
}

export default PostsList;
