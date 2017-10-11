import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import * as api from './utils/readableApi'
import Header from './components/Header'
import CategoriesNav from './components/CategoriesNav'
import PostsList from './components/PostsList'
import NewPost from './components/NewPost'
import Comments from './components/Comments'
import { getCategories } from './actions/categoriesActions'
import { getAllPosts } from './actions/postsActions'
import { getComments} from './actions/commentsActions'
import { changeSortProp, changeSortOrder } from './actions/sortActions'

class App extends Component {

  componentDidMount() {

    api.getAllCategories().then((results) => {
      const { categories } = results
      this.props.getCategories(categories)
    })

    api.getAllPosts().then((posts) => {
      this.props.getAllPosts(posts)
    })
  }

  onChangeProp = (event) => {
    this.props.changeSortProp(event.target.value)
  }

  onChangeOrder = (event) => {
    this.props.changeSortOrder(event.target.value)
  }

  render() {

    return (

      <div className="App">
        <Header title='READABLE APP'/>
        <CategoriesNav
          categories={this.props.categories}
        />
        <select defaultValue={this.props.sortBy.order} onChange={this.onChangeOrder}>
          <option value='ascending'>Ascending</option>
          <option value='descending'>Descending</option>
        </select>
        <select defaultValue={this.props.sortBy.prop} onChange={this.onChangeProp}>
          <option value='author'>Author</option>
          <option value='body'>Body</option>
          <option value='comments'>Number Of Comments</option>
          <option value='title'>Title</option>
          <option value='voteScore'>Vote Score</option>
        </select>
        <Route exact path='/' render={ () => (
          <PostsList
            posts={this.props.posts}
          />
        )}/>
        {this.props.categories.map((category) => (
          <Route
            key={category.name}
            exact path={`/${category.name}`}
            render={ () => (
              <PostsList posts={this.props.posts.filter((post) => post.category === category.name)}/>
            )}/>
        ))}
        <Route path='/newpost' render={ () => (
          <NewPost
            categories={this.props.categories}
          />
        )}/>
        <Route path='/:postId' render={({ match }) => (
          <Comments
            post={Object.keys(this.props.posts).map((key) => (posts[key])).filter((post) => post.id === match.params.postId)[0]}
          />
        )}/>
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts, comments, sortBy }) {
  const postsToArray = Object.keys(posts).map((key) => (posts[key]))
  const sortProp = sortBy.prop
  const sortedPosts = () => {
    if(sortBy.order === 'ascending') {
      return postsToArray.sort((a,b) => a[sortProp] > b[sortProp])
    } else {
      return postsToArray.sort((a,b) => b[sortProp] > a[sortProp])
    }
  }

  return {
    categories,
    comments,
    posts: sortedPosts(),
    sortBy
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: (data) => dispatch(getCategories(data)),
    getAllPosts: (data) => dispatch(getAllPosts(data)),
    getComments: (data) => dispatch(getComments(data)),
    changeSortOrder: (data) => dispatch(changeSortOrder(data)),
    changeSortProp: (data) => dispatch(changeSortProp(data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
