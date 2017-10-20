import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import * as api from './utils/readableApi'
import { sortedArray } from './utils/helper.js'
import Header from './components/Header'
import CategoriesNav from './components/CategoriesNav'
import PostsList from './components/PostsList'
import NewPost from './components/NewPost'
import Comments from './components/Comments'
import Filter from './components/Filter'
import EditPost from './components/EditPost'
import EditComment from './components/EditComment'
import { getCategories } from './actions/categoriesActions'
import { getAllPosts, changePostVoteScore, deletePost } from './actions/postsActions'
import { getComments, changeCommentVoteScore, deleteComment, deleteParentComment } from './actions/commentsActions'
import { changeSortProp, changeSortOrder } from './actions/sortActions'

class App extends Component {

  componentDidMount() {
// api for getting all the categories and saving on state with the getCategories action.
    api.getAllCategories().then((results) => {
      const { categories } = results
      this.props.getCategories(categories)
    })
// api for getting all posts and also getting all comments of all posts and storing both on state.
    api.getAllPosts().then((posts) => {
      this.props.getAllPosts(posts)
      for(const post of posts) {
        api.getAllCommentsOfPost(post.id).then((comments) => {
          this.props.getComments(comments)
        })
      }
    })
  }
//method for changing the sorting propertie
  onChangeProp = (event) => {
    this.props.changeSortProp(event.target.value)
  }
//method for changing the sorting order
  onChangeOrder = (event) => {
    this.props.changeSortOrder(event.target.value)
  }
// method for voting posts up and down
  onVotePost = (option, postId, voteChangeValue) => {
    api.votePost(option, postId).then((post) => {
      this.props.changePostVoteScore({postId: post.id, voteChangeValue})
    })
  }
// method for voting comments up and down
  onVoteComment =(option, commentId, voteChangeValue) => {
    api.voteComment(option, commentId).then((comment) => {
      this.props.changeCommentVoteScore({commentId: comment.id, voteChangeValue})
    })
  }
// method for deleting a post and also it's comments
  onDeletePost = (postId, deleted) => {
    api.deletePost(postId, deleted).then((post) => {
      this.props.deletePost({ postId: post.id, deleted })
      const commentsOfPost = this.props.comments.filter((comment) => comment.parentId === post.id)
      for(const comment of commentsOfPost) {
        this.props.deleteParentComment({parentId: comment.parentId, commentId: comment.id, parentDeleted: deleted})
      }
    })
    this.props.history.push("/")
  }
// method for deleting a post
  onDeleteComment = (commentId, deleted) => {
    api.deleteComment(commentId, deleted).then((comment) => {
      this.props.deleteComment({commentId: comment.id, deleted})
    })
  }

  render() {

    return (

      <div className="App">
{/* here renders the header with the title prop  */}
        <Header title='READABLE APP'/>
{/* here renders the navigation bar with all the categories for filtering posts. Passed the categories prop for mapping over it  */}
        <CategoriesNav
          categories={this.props.categories}
        />
{/* here renders the selection options for sorting the posts by order and properties */}
        <Filter
          sortBy={this.props.sortBy}
          onChangeProp={this.onChangeProp}
          onChangeOrder={this.onChangeOrder}
        />
{/* here renders all the posts */}
        <Route exact path='/' render={ () => (
          <PostsList
            posts={this.props.posts}
            onVotePost={this.onVotePost}
            onDeletePost={this.onDeletePost}
            comments={this.props.comments}
          />
        )}/>
{/* here renders the posts filtered by the selected category */}
        {this.props.categories.map((category) => (
          <Route
            key={category.name}
            exact path={`/${category.name}`}
            render={ () => (
              <PostsList
                posts={this.props.posts.filter((post) => post.category === category.name)}
                onVotePost={this.onVotePost}
                onDeletePost={this.onDeletePost}
                comments={this.props.comments}
              />
            )}/>
        ))}
{/* here renders the form for adding a new post in a new view */}
        <Route exact path='/newpost' render={ () => (
          <NewPost
            categories={this.props.categories}
          />
        )}/>
{/* here renders the form for editing a post in a new view */}
        <Route exact path='/:postId/editPost' render={ ({ match }) => (
          <EditPost
            post={this.props.posts.filter((post) => post.id === match.params.postId)[0]}
          />
        )}/>
{/* here renders the form for editing a comment in a new view */}
        <Route exact path='/:commentId/editComment' render={ ({ match }) => (
          <EditComment
            comment={this.props.comments.filter((comment) => comment.id === match.params.commentId)[0]}
          />
        )}/>
{/* here renders the comments of the selected post */}
        {this.props.categories.map((category) => (
          <Route
            key={category.name}
            path={`/${category.name}/:postId`}
            render={ ({ match }) => (
              <Comments
                post={this.props.posts.filter((post) => post.id === match.params.postId)[0]}
                comments={this.props.comments}
                posts={this.props.posts}
                onVotePost={this.onVotePost}
                onDeletePost={this.onDeletePost}
                onVoteComment={this.onVoteComment}
                onDeleteComment={this.onDeleteComment}
              />
            )}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts, comments, sortBy, editMode }) {
// transform the posts object into an array for mapping over it. Same thing with the comments, and also mapped them to props.
// also the categories and the sortBy are mapped to props.
  const postsToArray = Object.keys(posts).map((key) => (posts[key]))
// here the posts as an array are filtered to render only the ones with the property deleted false.
  const filteredPostsArray = postsToArray.filter((post) => post.deleted !== true)
  const commentsToArray = Object.keys(comments).map((key) => (comments[key]))
// here the comments as an array are filtered to render only the ones with the property deleted false.
  const filteredCommentsArrayDeleted = commentsToArray.filter((comment) => comment.deleted !== true)
// here the comments as an array are filtered to render only the ones with the property parentDeleted false.
  const filteredCommentsArrayDeletedParentDeleted = filteredCommentsArrayDeleted.filter((comment) => comment.parentDeleted !== true)

  return {
    categories,
    comments: sortedArray(filteredCommentsArrayDeletedParentDeleted, sortBy),
    posts: sortedArray(filteredPostsArray, sortBy),
    sortBy,
  }
}

function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    getCategories: (data) => dispatch(getCategories(data)),
    getAllPosts: (data) => dispatch(getAllPosts(data)),
    getComments: (data) => dispatch(getComments(data)),
    changeSortOrder: (data) => dispatch(changeSortOrder(data)),
    changeSortProp: (data) => dispatch(changeSortProp(data)),
    changePostVoteScore: (data) => dispatch(changePostVoteScore(data)),
    changeCommentVoteScore: (data) => dispatch(changeCommentVoteScore(data)),
    deletePost: (data) => dispatch(deletePost(data)),
    deleteComment: (data) => dispatch(deleteComment(data)),
    deleteParentComment: (data) => dispatch(deleteParentComment(data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
