import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as api from '../../utils/readableApi'
import uuidv4 from 'uuid/v4'
import './index.css'
import { addComment } from '../../actions/commentsActions'


class  NewComment extends Component {
  state = {
    authorInput: '',
    bodyInput: '',
    categorySelect: '',
  }

  onChangeAuthor = (event) => {
    const authorInput = event.target.value
    this.setState({ authorInput })
  }

  onChangeBody = (event) => {
    const bodyInput = event.target.value
    this.setState({ bodyInput })
  }

  onAddComment (id, timestamp, body, author, parentId) {
    const { addComment, history } = this.props
    api.addComment(id, timestamp, body, author, parentId).then((comment) => {
      addComment({newComment: comment})
    })
    history.goBack()
  }

  render() {

  const id = uuidv4()

    const { bodyInput, authorInput } = this.state
    const { post } = this.props

    return (
      <div className='form-container'>
        <div className='form-container-top'>
          <input className='form-input' type='text' placeholder='Author' onChange={this.onChangeAuthor}/>
        </div>
        <input className='form-input-body' type='text' placeholder='Body' onChange={this.onChangeBody}/>
        <button className='post-button' onClick={() => this.onAddComment(id, Date.now(), bodyInput, authorInput, post.id)}>ADD COMMENT</button>
      </div>
    )
  }
}


function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    addComment: (data) => dispatch(addComment(data)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NewComment))
