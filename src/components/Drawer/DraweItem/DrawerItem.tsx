import React from 'react'
import './DrawerItem.scss'
import drawer from '../../../assets/img/drawer/1.jpg'

export const DrawerItem = () => {
  return (
    <div className="drawer-pizza">
      <div className="drawer-pizza__wrapper">
        <div className="drawer-pizza__wrapper-top">
          <div className="drawer-pizza__category-top">
            <img src={drawer} alt="drawer" />
            <div className="drawer-pizza__category-title">
              Любимая Пицца Деда Мороза
              <div className="drawer-pizza__category-subtitle">
                Традиционное тесто, 23 см
              </div>
            </div>
            <a href="@/components/Drawer/DraweItem/DrawerItem#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586l4.95-4.95 1.414 1.414L8.414 7z"
                ></path>
              </svg>
            </a>
          </div>

          <div className="drawer-pizza__category-bottom">
            <div className="drawer-category-result">
              <div className="drawer-category-result-add">
                <button className="minus">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                </button>
                <span>2</span>
                <button className="plus">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </button>
              </div>
              <div className="drawer-category-result-sum">499 ₽</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
