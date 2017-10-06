import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import * as api from './utils/readableApi'
import Header from './components/Header'
import CategoriesNav from './components/CategoriesNav'
import PostsList from './components/PostsList'
import { getCategories } from './actions/categoriesActions'
import { getAllPosts } from './actions/postsActions'

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

  render() {
    console.log(this.props)
    return (

      <div className="App">
        <Header title='READABLE APP'/>
        <CategoriesNav
          categories={this.props.categories}
        />
        <Route exact path='/' render={ () => (
          <PostsList posts={this.props.posts}/>

        )}/>
        {this.props.categories.map((category) => (
          <Route
            key={category.name}
            exact path={`/${category.name}`}
            render={ () => (
              <PostsList posts={this.props.posts.filter((post) => post.category === category.name)}/>
            )}/>
        ))}
      </div>
    );
  }
}

function mapStateToProps ({ categories, posts }) {
  return {
    categories,
    posts: Object.keys(posts).map((key) => (posts[key]))
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCategories: (data) => dispatch(getCategories(data)),
    getAllPosts: (data) => dispatch(getAllPosts(data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
