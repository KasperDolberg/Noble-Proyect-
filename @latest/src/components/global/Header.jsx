import React from 'react'
import '/src/stylesheets/global/header.css'

const Header = ({title}) => {
  return (
    <div className='container-header'>

        <div className="title-header">
            <h2>{title}</h2>
            <div className="line-grey"></div>
        </div>

    </div>
  )
}

export default Header