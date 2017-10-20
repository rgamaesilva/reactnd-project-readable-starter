import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { editPost } from '../../actions/postsActions'
import * as api from '../../utils/readableApi'
import './index.css'

class  EditPost extends Component {
  state = {
    titleInput: '',
    bodyInput: '',
  }

  componentWillReceiveProps(nextProps) {
    (nextProps.post && (
      this.setState({ titleInput: nextProps.post.title, bodyInput: nextProps.post.body })
    ))
  }

  onChangeTitle = (event) => {
    const titleInput = event.target.value
    this.setState({ titleInput })
  }

  onChangeBody = (event) => {
    const bodyInput = event.target.value
    this.setState({ bodyInput })
  }

  onEditPost = () => {
    const {titleInput, bodyInput} = this.state
    const {post} = this.props
    if( titleInput === '' || bodyInput === '') {
      alert("ALL FIELDS MUST BE FILLED!!")
      return
    }
    api.editPost( post.id, titleInput, bodyInput ).then((post) => {
      this.props.editPost({postId: post.id, title: titleInput, body: bodyInput})
    })
    this.props.history.push("/")
  }

  render() {

    return (
      <div className='form-container'>
        {this.props.post &&
          <div className='form-container'>
            <div className='form-container-top'>
              <input className='form-input' type='text' defaultValue={this.props.post.title} onChange={this.onChangeTitle}/>
              <input className='form-input' type='text' defaultValue={this.props.post.author} disabled/>
              <select className='select' defaultValue={this.props.post.category} disabled>
                <option value={this.props.post.category}>{this.props.post.category}</option>
              </select>
            </div>
            <input className='form-input-body' type='text' defaultValue={this.props.post.body} onChange={this.onChangeBody}/>
            <button className='post-button' onClick={this.onEditPost}>SAVE</button>
          </div>
        }
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    editPost: (data) => dispatch(editPost(data)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(EditPost))
