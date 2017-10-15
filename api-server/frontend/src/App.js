import React, { Component } from 'react';
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
import UpdatePost from './components/UpdatePost'
import { getCategories } from './actions/categoriesActions'
import { getAllPosts } from './actions/postsActions'
import { getComments} from './actions/commentsActions'
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
  onVotePost = (option, postId) => {
    api.votePost(option, postId)
    console.log(option)
    console.log(postId)
  }
// method for deleting a post
  onDeletePost = (postId, option) => {
    api.deletePost(postId, option)
    console.log(postId)
    console.log(option)
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
              />
            )}/>
        ))}
{/* here renders the form for adding a new post in a new view */}
        <Route exact path='/newpost' render={ () => (
          <NewPost
            categories={this.props.categories}
          />
        )}/>
{/* here renders the form for updating the information of the post */}
        <Route exact path='/:postId/updatePost' render={ ({ match }) => (
          <UpdatePost
            categories={this.props.categories}
            post={this.props.posts.filter((post) => post.id === match.params.postId)[0]}
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
              />
            )}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts, comments, sortBy }) {
// transform the posts object into an array for mapping over it. Same thing with the comments, and also mapped them to props.
// also the categories and the sortBy are mapped to props.
  const postsToArray = Object.keys(posts).map((key) => (posts[key]))
  const commentsToArray = Object.keys(comments).map((key) => (comments[key]))
  return {
    categories,
    comments: sortedArray(commentsToArray, sortBy),
    posts: sortedArray(postsToArray, sortBy),
    sortBy
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
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
