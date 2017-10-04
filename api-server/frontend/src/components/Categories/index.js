import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

const Categories = (props) => {
  return (
    <div>
      <ul>
        {props.categories.map((category) =>
          <div key={category.name}>
            <Route Path={`/${category.name}`} render={ () => (
              <Link to={`/${category.name}`}>
                {category.name}
              </Link>
            )}/>
          </div>
        )}
      </ul>
    </div>
  )
}

export default Categories
