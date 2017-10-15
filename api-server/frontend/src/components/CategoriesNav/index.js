import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const CategoriesNav = (props) => {
  return (
    <div className='nav-container'>
      <ul className='nav-bar'>
        <li>
          <Link to={`/`}>
            All Posts
          </Link>
        </li>
        {props.categories.map((category) =>
          <li key={category.name}>
            <Link to={`/${category.name}`}>
              {category.name}
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default CategoriesNav;
