import React from 'react'
import './index.css'
import Post from '../Post'

const PostsList = (props) => {

  const { posts, onVotePost, onDeletePost, comments } = props

  return (
    <div className="posts-container">
      {posts.length > 0 && posts.map((post) =>
        <Post
          post={post}
          key={post.id}
          onVotePost={onVotePost}
          onDeletePost={onDeletePost}
          comments={comments.filter((comment) => post.id === comment.parentId)}
        />
      )}
    </div>
  )
}

export default PostsList;
