import React from 'react'

const Filter = (props) => {

  const { sortBy, onChangeOrder, onChangeProp } = props

  return (
    <div>
      <select className="select" defaultValue={sortBy.order} onChange={onChangeOrder}>
        <option value='ascending'>Ascending</option>
        <option value='descending'>Descending</option>
      </select>
      <select className="select" defaultValue={sortBy.prop} onChange={onChangeProp}>
        <option value='author'>Author</option>
        <option value='body'>Body</option>
        <option value='timestamp'>Date</option>
        <option value='title'>Title</option>
        <option value='voteScore'>Vote Score</option>
      </select>
    </div>
  )
}

export default Filter
