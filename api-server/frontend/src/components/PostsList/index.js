import React from 'react'
import './index.css'
import Post from '../Post'

const PostsList = (props) => {

  console.log(props)

  return (
    <div className="posts-container">
      {props.posts.length > 0 && props.posts.map((post) =>
        <Post
          posts={post}
          key={post.id}
          onUpVotePost={props.onUpVotePost}
        />
      )}
    </div>
  )
}

export default PostsList;
