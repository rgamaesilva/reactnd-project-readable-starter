import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Link className='open-addPost' to='/newpost'>
        <div>ADD NEW POST</div>
      </Link>
    </div>
  )
}

export default Header;
