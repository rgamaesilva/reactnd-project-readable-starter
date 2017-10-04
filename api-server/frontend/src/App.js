import React, { Component } from 'react';
import './App.css';
import Categories from './components/Categories'
import { Route, withRouter } from 'react-router-dom'
import * as api from './utils/readableApi'
import Posts from './components/Posts'
import Header from './components/Header'

class App extends Component {

  state = {
    categories: [],
    posts: []
  }

  componentDidMount() {
    api.getAllCategories().then((categories) => {
      this.setState({ categories: categories.categories })
    })
    api.getAllPosts().then((posts) => {
      this.setState({ posts: posts })
    })
  }

  render() {

    return (

      <div className="App">

        <Header title='CATEGORIES'/>
        <Route Path='/' render={ () => (
          <Categories
            categories={this.state.categories}
          />
          <Posts
            posts={this.state.posts}
          />
        )}/>

      </div>
    );
  }
}

export default withRouter(App);
