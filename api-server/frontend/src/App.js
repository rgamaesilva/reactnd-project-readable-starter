import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom'
import * as api from './utils/readableApi'
import Header from './components/Header'
import CategoriesNav from './components/CategoriesNav'
import PostsList from './components/PostsList'

class App extends Component {

  state = {
    categories: [],
    allPosts: [],
    categoryPosts: [],
    category: ''
  }

  componentDidMount() {
    api.getAllCategories().then((categories) => {
      this.setState({ categories: categories.categories })
    })
    api.getAllPosts().then((posts) => {
      this.setState({ allPosts: posts })
    })
  }

  render() {

    return (

      <div className="App">
        <Header title='READABLE APP'/>
        <CategoriesNav
          categories={this.state.categories}
        />
        <Route exact path='/' render={ () => (
          <PostsList posts={this.state.allPosts}/>

        )}/>
        {this.state.categories.map((category) => (
          <Route
            key={category.name}
            exact path={`/${category.name}`}
            render={ () => (
              <PostsList posts={this.state.allPosts.filter((post) => post.category === category.name)}/>
            )}/>
        ))}
      </div>
    );
  }
}

export default withRouter(App);
