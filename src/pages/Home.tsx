import React from 'react'
import { Header } from '@/components/Header/Header'
import { Sort } from '@/components/Sort/Sort'
import { Filter } from '@/components/Filtered/Filter'
import { PizzaBlock } from '@/components/PizzaBlock/PizzaBlock'
import { Drawer } from '@/components/Drawer/Drawer'
import './Home.scss'
import { Footer } from '@/components/Footer/Footer'
import { Pagination } from '@/components/Pagination/Pagination'

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Sort />
        <div className="pizza__box">
          <div className="container">
            <div className="pizza__box-item">
              <div className="pizza__box-element">
                <Filter />
                <h1>пицца</h1>
                <div className="pizza__box-body">
                  <PizzaBlock />
                  <PizzaBlock />
                  <PizzaBlock />
                </div>
                <Pagination />
              </div>
              <div className="drawer">
                <Drawer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
