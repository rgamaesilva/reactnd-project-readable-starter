import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as api from '../../utils/readableApi'
import uuidv4 from 'uuid/v4'
import './index.css'
import { addPost } from '../../actions/postsActions'


class  NewPost extends Component {
  state = {
    titleInput: '',
    authorInput: '',
    bodyInput: '',
    categorySelect: '',
  }

  onChangeTitle = (event) => {
    const titleInput = event.target.value
    this.setState({ titleInput })
  }

  onChangeAuthor = (event) => {
    const authorInput = event.target.value
    this.setState({ authorInput })
  }

  onChangeBody = (event) => {
    const bodyInput = event.target.value
    this.setState({ bodyInput })
  }

  onChangeCategory = (event) => {
    const categorySelect = event.target.value
    this.setState({ categorySelect })
  }

  onAddPost (id, timestamp, title, body, author, category, voteScore) {
    const { addPost, history } = this.props
    api.addPost(id, timestamp, title, body, author, category, voteScore).then((post) => {
      addPost({newPost: post})
    })
    history.push("/")
  }

  render() {

  const { categories } = this.props
  const { titleInput, bodyInput, authorInput, categorySelect } = this.state

  const id = uuidv4()

    return (
      <div className='form-container'>
        <div className='form-container-top'>
          <input className='form-input' type='text' placeholder='Title' onChange={this.onChangeTitle}/>
          <input className='form-input' type='text' placeholder='Author' onChange={this.onChangeAuthor}/>
          <select className='select' onChange={this.onChangeCategory}>
              <option value='none' defaultValue >none</option>
            {categories.map((category) => (
              <option key={category.name} value={category.name} >{category.name}</option>
            ))}
          </select>
        </div>
        <input className='form-input-body' type='text' placeholder='Body' onChange={this.onChangeBody}/>
        <button className='post-button' onClick={() => this.onAddPost(id, Date.now(), titleInput, bodyInput, authorInput, categorySelect, 0)} >ADD POST</button>
      </div>
    )
  }
}


function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    addPost: (data) => dispatch(addPost(data)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewPost))
