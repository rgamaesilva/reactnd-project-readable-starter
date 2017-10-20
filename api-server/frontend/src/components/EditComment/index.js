import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { editComment } from '../../actions/commentsActions'
import * as api from '../../utils/readableApi'
import './index.css'

class  EditComment extends Component {
  state = {
    bodyInput: '',
  }

  componentWillReceiveProps(nextProps) {
    (nextProps.comment && (
      this.setState({ bodyInput: nextProps.comment.body })
    ))
  }

  onChangeBody = (event) => {
    const bodyInput = event.target.value
    this.setState({ bodyInput })
  }

  onEditComment = () => {
    const { bodyInput } = this.state
    const { comment } = this.props
    if(bodyInput === '') {
      alert("ALL FIELDS MUST BE FILLED!!")
      return
    }
    const timestamp = Math.floor(Date.now())
    console.log(comment.id)
    console.log(timestamp)
    console.log(bodyInput)
    api.editComment(comment.id, timestamp, bodyInput).then((comment) => {
      console.log(comment)
      this.props.editComment({commentId: comment.id, timestamp, body: bodyInput})
    })
    this.props.history.goBack()
  }

  render() {

    return (
      <div className='form-container'>
        {this.props.comment &&
          <div className='form-container'>
            <div className='form-container-top'>
              <input className='form-input' defaultValue={this.props.comment.author} type='text' disabled/>
            </div>
            <input className='form-input-body' type='text' defaultValue={this.props.comment.body} onChange={this.onChangeBody}/>
            <button className='post-button' onClick={this.onEditComment}>SAVE</button>
          </div>
        }
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
// here all the actions are mapped to props.
    editComment: (data) => dispatch(editComment(data)),
  }
}

export default withRouter(connect(null, mapDispatchToProps)(EditComment))
