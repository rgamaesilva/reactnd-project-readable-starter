import React, { Component } from 'react'
import * as api from '../../utils/readableApi'
import uuidv4 from 'uuid/v4'
import './index.css'

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
    api.addPost(id, timestamp, title, body, author, category, voteScore)
    window.location.href = '../';
  }

  render() {

  const id = uuidv4()

    return (
      <div className='form-container'>
        <div className='form-container-top'>
          <input className='form-input' type='text' placeholder='Title' onChange={this.onChangeTitle}/>
          <input className='form-input' type='text' placeholder='Author' onChange={this.onChangeAuthor}/>
          <select className='select' onChange={this.onChangeCategory}>
              <option value='none' defaultValue >none</option>
            {this.props.categories.map((category) => (
              <option key={category.name} value={category.name} >{category.name}</option>
            ))}
          </select>
        </div>
        <input className='form-input-body' type='text' placeholder='Body' onChange={this.onChangeBody}/>
        <button onClick={() => this.onAddPost(id, Date.now(), this.state.titleInput, this.state.bodyInput, this.state.authorInput, this.state.categorySelect, 0)} >ADD POST</button>
      </div>
    )
  }
}

export default NewPost;
