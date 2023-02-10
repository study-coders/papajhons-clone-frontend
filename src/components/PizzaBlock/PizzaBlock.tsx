import React from 'react'
import './PizzaBlock.scss'
import pizza from '../../assets/img/PizzaBlock/1.webp'

export const PizzaBlock = () => {
  return (
    <div className="pizza__block">
      <img className="pizza-block-img" src={pizza} alt="pizza" />
      <a className="pizza-block-link" href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 12"
          className="_2NJFnitgCQGGa8zvnr9XYE"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M1 0h14a1 1 0 010 2H1a1 1 0 010-2zm2 5h10a1 1 0 010 2H3a1 1 0 010-2zm2 5h6a1 1 0 010 2H5a1 1 0 010-2z"
          ></path>
        </svg>
      </a>
      <div className="hit">
        <span className="hit-title">Hit</span>
        <svg
          className="hit-img"
          style={{ width: '12px' }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>
        <span className="hit-person">1-2</span>
      </div>

      <div className="pizza-wrapper">
        <div className="pizza-wrapper-top">
          <div className="pizza-body">
            <span className="pizza-title">Супер папа</span>
            <a className="pizza-link" href="#">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                className="_3RgSpktyKSkdw9AgorEDVk"
              >
                <path
                  d="M9 18A9 9 0 119 0a9 9 0 010 18zm0-1A8 8 0 109 1a8 8 0 000 16zM8 4h2v2H8V4zm0 4h2v6H8V8z"
                  fill="currentColor"
                  fill-rule="nonzero"
                ></path>
              </svg>
            </a>
          </div>
          <p className="pizza-subtitle">
            Хит"Папа Джонс" с пикантной пепперони, ветчиной, ароматной свининой,
            фирменным томатным соусом,Хит"Папа Джонс" с пикантной пепперони,
            ветчиной, ароматной свининой, фирменным томатным соусом,
          </p>
        </div>
        <div className="pizza-wrapper-bottom">
          <div className="pizza-sort">
            <button className="pizza-sort-btn active">Традиционное</button>
            <button className="pizza-sort-btn ">Тонкое</button>
          </div>
          <div className="pizza-size">
            <a className="pizza-size-link activeLink" href="#">
              23
            </a>
            <a className="pizza-size-link " href="#">
              30
            </a>
            <a className="pizza-size-link" href="#">
              35
            </a>
            <a className="pizza-size-link" href="#">
              40
            </a>
          </div>
          <div className="pizza-cheese">
            <a className="pizza-cheese-plus" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </a>
            <span>чесночно-сырная-корочка</span>
            <span>89 ₽</span>
          </div>
          <div className="pizza-bottom">
            <button className="pizza-bottom-btn">В корзину</button>
            <button className="pizza-btn-bonus">959 Б</button>
            <span className="pizza-bottom-title">979 ₽</span>
          </div>
        </div>
      </div>
    </div>
  )
}
