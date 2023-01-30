import React from 'react'
import logo from '@/assets/img/logo/logo.svg'
import './Header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <a href="#">
            <img src={logo} alt="Papa John's" />
          </a>
          <button className="header__btn-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
            </svg>
            <span>Укажите свой адрес</span>
          </button>
          <div className="header__left">
            <button className="header-talk">ru</button>
            <button className="header-burger-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
