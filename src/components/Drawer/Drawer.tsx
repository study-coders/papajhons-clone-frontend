import React from 'react'
import './Drawer.scss'
import drawer from '@/assets/img/logo/drawer/drawer.jpg'
import { DrawerItem } from '@/components/Drawer/DraweItem/DrawerItem'

export const Drawer = () => {
  return (
    <div className="drawer__wrapper">
      <div className="drawer__wrapper-top">
        <div className="drawer-box">
          <div className="drawer-circle"></div>
          <div className="drawer-img">
            <svg
              className="block-cart"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2 23.2c-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4 1.32 0 2.4-1.08 2.4-2.4 0-1.32-1.08-2.4-2.4-2.4zM4 4v2.4h2.4l4.32 9.12-1.68 2.88c-.12.36-.24.84-.24 1.2 0 1.32 1.08 2.4 2.4 2.4h14.4v-2.4H11.68c-.12 0-.24-.12-.24-.24v-.12l1.08-2.04h8.88c.96 0 1.68-.48 2.04-1.2l4.32-7.8c.24-.24.24-.36.24-.6 0-.72-.48-1.2-1.2-1.2H9.04L7.96 4H4zm19.2 19.2c-1.32 0-2.4 1.08-2.4 2.4 0 1.32 1.08 2.4 2.4 2.4 1.32 0 2.4-1.08 2.4-2.4 0-1.32-1.08-2.4-2.4-2.4z"
                fill="currentColor"
                fill-rule="nonzero"
              ></path>
            </svg>
          </div>
        </div>
        <div className="block-drawer-obj">
          <div className="block-drawers">
            <div className="block-drawer-wrapper">
              <span className="block__drawer-cart">Корзина</span>
              <span className="block__drawer-set">(2)</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </svg>
            </div>
            <a className="drawer-clear" href="@/components/Drawer/Drawer#">
              Очистить
            </a>
          </div>
          <DrawerItem />
          <div style={{ display: 'none' }} className="drawer__object">
            <img className="drawer-img" src={drawer} alt="drawer" />
            <p className="drawer-title">
              Корзина пуста. Выберите пиццу из меню или повторите предыдущий
              заказ
            </p>
          </div>
          <div className="drawer-pizza__wrapper-sum">
            <div className="drawer-pizza__sum-item">
              <span className="sum-item-size1">Сумма заказа:</span>
              <span>998 ₽</span>
            </div>
            <a className="drawer-btn" href="@/components/Drawer/Drawer#">
              оформить
            </a>
            <div className="drawer-subtitle">Начислится 99 бонусов</div>
          </div>
        </div>
      </div>

      <div className="drawer__wrapper-bottom">
        <div className="promo">
          <input
            className="promo-search"
            type="text"
            placeholder="Ввести промокод"
          />
          <button className="promo-btn">
            <svg
              className="promo-img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M0 256C0 397.4 114.6 512 256 512s256-114.6 256-256S397.4 0 256 0S0 114.6 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
