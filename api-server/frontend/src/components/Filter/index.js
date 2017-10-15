import React from 'react'

const Filter = (props) => {
  return (
    <div>
      <select className="select" defaultValue={props.sortBy.order} onChange={props.onChangeOrder}>
        <option value='ascending'>Ascending</option>
        <option value='descending'>Descending</option>
      </select>
      <select className="select" defaultValue={props.sortBy.prop} onChange={props.onChangeProp}>
        <option value='author'>Author</option>
        <option value='body'>Body</option>
        <option value='comments'>Number Of Comments</option>
        <option value='title'>Title</option>
        <option value='voteScore'>Vote Score</option>
      </select>
    </div>
  )
}

export default Filter
