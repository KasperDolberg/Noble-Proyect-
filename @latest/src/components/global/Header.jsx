import React from 'react'
import '/src/stylesheets/global/header.css'

const Header = ({title, number}) => {
  return (
    <div className='container-header'>
      <div className="title-header" style={{ width: number }}>
            <h2>{title}</h2>
            <div className="line-grey"></div>
        </div>

    </div>
  )
}

export default Header