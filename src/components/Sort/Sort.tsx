import React from 'react'
import './Sort.scss'
import pizza from '../../assets/img/logo/sort/1.svg'
import snack from '../../assets/img/logo/sort/2.svg'
import drink from '../../assets/img/logo/sort/3.svg'
import sauce from '../../assets/img/logo/sort/4.svg'
import sweet from '../../assets/img/logo/sort/5.svg'
import harangue from '../../assets/img/logo/sort/6.svg'
import combo from '../../assets/img/logo/sort/7.svg'
import joy from '../../assets/img/logo/sort/8.svg'

export const Sort = () => {
  return (
    <div className="sort">
      <div className="container">
        <div className="sort__item">
          <ul>
            <li>
              <a href="#">
                <img src={pizza} alt="пицца" />
                <div>Пицца</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={snack} alt="закуски" />
                <div>Закуски</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={drink} alt="напитки" />
                <div>Напитки</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={sauce} alt="соусы" />
                <div>Соусы</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={sweet} alt="десерты" />
                <div>Десерты</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={harangue} alt="горячее" />
                <div>Горячее</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={combo} alt="комбо" />
                <div>Комбо</div>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={joy} alt="радости" />
                <div>Радости</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
