import React from 'react'
// import * as api from '../../utils/readableApi'
import './index.css'

const UpdatePost = (props) => {

  return (
    <div className='form-container'>
      <div className='form-container-top'>
        <input className='form-input' type='text' placeholder='Title'/>
        <input className='form-input' type='text' placeholder='Author'/>
        <select className='select'>
            <option value='none' defaultValue >none</option>
          {props.categories.map((category) => (
            <option key={category.name} value={category.name} >{category.name}</option>
          ))}
        </select>
      </div>
      <input className='form-input-body' type='text' placeholder='Body'/>
      <button className='post-button'>ADD POST</button>
    </div>
  )
}

export default UpdatePost;
