import React from 'react'
import './Footer.scss'
import app_gallery from '@/assets/img/footer/app-gallery.png'
import google_play from '@/assets/img/footer/google-play.png'
import app_store from '@/assets/img/footer/app-store.svg'

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-right">
            <div className="footer-top-carrier">
              <ul>
                <li>
                  <a href="#">Стать франчайзи</a>
                </li>
                <li>
                  <a href="#">Создать свою пиццу</a>
                </li>
                <li>
                  <a href="#">Карьера</a>
                </li>
              </ul>
            </div>
            <div className="footer-top-blog">
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Блог</a>
                </li>
                <li>
                  <a href="#">Калорийность и состав</a>
                </li>
              </ul>
            </div>
            <div className="footer-top-delivery">
              <ul>
                <li>
                  <a href="#">Аллергены</a>
                </li>
                <li>
                  <a href="#">Доставка</a>
                </li>
                <li>
                  <a href="#">Корпоративные заказы</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-top-left">
            <a href="#">
              <img src={app_gallery} alt="app-gallery" />
            </a>
            <a href="#">
              <img src={google_play} alt="google_play" />
            </a>
            <a href="#">
              <img src={app_store} alt="app_store" />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; Copyright 2004 — 2023 ООО «КОМО».</p>
            <p>
              115304, город Москва, Каспийская ул, д. 22 к. 1 стр. 5, этаж 4
              помещ. VIII ком. 22 офис а1ю
            </p>
            <p>ОГРН: 1217700421608. ИИНН: 9724057417</p>
            <p>Возраст 6+. Все права защищены.</p>
          </div>
          <a className="footer-vk" href="#">
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.113 11.71h1.235s.373-.04.564-.245c.175-.188.17-.541.17-.541s-.024-1.653.745-1.897c.758-.24 1.732 1.598 2.765 2.305.78.534 1.373.417 1.373.417l2.76-.038s1.445-.09.76-1.221c-.056-.093-.399-.838-2.053-2.369-1.73-1.602-1.498-1.343.586-4.114 1.27-1.688 1.778-2.718 1.619-3.16-.151-.42-1.085-.309-1.085-.309l-3.108.02s-.23-.032-.401.07c-.167.1-.274.333-.274.333s-.492 1.306-1.148 2.416c-1.384 2.344-1.938 2.468-2.164 2.322-.526-.339-.395-1.362-.395-2.09 0-2.27.346-3.217-.672-3.463-.338-.08-.587-.135-1.45-.143C8.83-.01 7.891.006 7.36.266c-.353.172-.626.557-.46.58.206.026.67.124.917.459.319.432.308 1.403.308 1.403s.183 2.673-.428 3.005c-.419.228-.993-.237-2.227-2.363-.632-1.09-1.11-2.293-1.11-2.293S4.27.832 4.105.71A1.286 1.286 0 003.627.52L.674.54S.23.55.068.742c-.145.171-.012.525-.012.525s2.312 5.395 4.93 8.113c2.401 2.493 5.127 2.33 5.127 2.33"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a className="footer-info" href="#">
            <p>Политика обработки персональных данных</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
