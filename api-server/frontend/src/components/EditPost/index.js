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
    const { titleInput, bodyInput } = this.state
    const { post, editPost, history } = this.props
    if( titleInput === '' || bodyInput === '') {
      alert("ALL FIELDS MUST BE FILLED!!")
      return
    }
    api.editPost( post.id, titleInput, bodyInput ).then((post) => {
      editPost({postId: post.id, title: titleInput, body: bodyInput})
    })
    history.push("/")
  }

  render() {

    const { post } = this.props

    return (
      <div className='form-container'>
        {post &&
          <div className='form-container'>
            <div className='form-container-top'>
              <input className='form-input' type='text' defaultValue={post.title} onChange={this.onChangeTitle}/>
              <input className='form-input' type='text' defaultValue={post.author} disabled/>
              <select className='select' defaultValue={post.category} disabled>
                <option value={post.category}>{post.category}</option>
              </select>
            </div>
            <input className='form-input-body' type='text' defaultValue={post.body} onChange={this.onChangeBody}/>
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
