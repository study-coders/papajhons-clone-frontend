import React from 'react'
import './Loader.scss'

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      {/*<span className="loader"></span>*/}
      <div className="center">
        <div className="ring"></div>
        <span>loading...</span>
      </div>
    </div>
  )
}
