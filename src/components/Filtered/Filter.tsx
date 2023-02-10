import React from 'react'
import './Filter.scss'

export const Filter = () => {
  return (
    <div className="pizza__box-filter">
      <span>фильтр</span>
      <div>
        <button>хит</button>
        <button>веган</button>
        <button className="active">острая</button>
        <button>новинка</button>
        <button>с мясом</button>
        <button>без лука</button>
        <button>с курицей</button>
        <button>с грибами</button>
        <button>соус рэнч</button>
        <button>без свинины</button>
        <button>соус барбекью</button>
        <button>вегетарианская</button>
        <button>
          сыр
          <svg
            className="filter-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
        <button>
          мясо
          <svg
            className="filter-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
        <button>
          овощи
          <svg
            className="filter-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
        <button>
          другое
          <svg
            className="filter-img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#70544F"
          >
            <path
              fill="currentColor"
              d="M16.08 18.882A8 8 0 014 12l1.033-.688L6 12a6 6 0 009.06 5.163l1.02 1.72zm.62-8.346l2.328 2.331 2.252-2.32 1.435 1.393-3.666 3.777-3.764-3.767 1.415-1.414zM7.937 5.107A8 8 0 0120 12l-.982 1.045L18 12a6 6 0 00-9.046-5.17L7.937 5.106zM2.7 13.717l-1.415-1.413 3.764-3.768 3.666 3.778-1.435 1.393-2.252-2.32-2.328 2.33z"
            ></path>
          </svg>
        </button>
      </div>
      <a href="#">
        <svg
          width="17"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="#BFB7B6"
        >
          <path d="M.213 1.61L5.99 9v5a2.01 2.01 0 004.02 0V9s3.446-4.41 5.778-7.39C16.3.95 15.828 0 14.984 0H1.006C.172 0-.3.95.213 1.61z"></path>
        </svg>
      </a>
    </div>
  )
}
