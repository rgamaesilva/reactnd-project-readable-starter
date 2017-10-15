import React from 'react'
import './index.css'
import Post from '../Post'

const PostsList = (props) => {

  return (
    <div className="posts-container">
      {props.posts.length > 0 && props.posts.map((post) =>
        <Post
          posts={post}
          key={post.id}
          onVotePost={props.onVotePost}
          onDeletePost={props.onDeletePost}
        />
      )}
    </div>
  )
}

export default PostsList;
