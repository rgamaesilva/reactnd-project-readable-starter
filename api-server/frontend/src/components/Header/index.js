import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'


const Header = (props) => {

  const { title } = props

  return (
    <div>
      <h1>{title}</h1>
      <Link to='/newpost'>
        <div className='open-addPost'>ADD NEW POST</div>
      </Link>
    </div>
  )
}

export default Header;
