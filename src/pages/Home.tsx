import React from 'react'
import { Header } from '@/components/Header/Header'
import './Home.scss'
import { Sort } from '@/components/Sort/Sort'
import { Filter } from '@/components/Filtered/Filter'

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Sort />
        <div className="pizza__box">
          <div className="container">
            <Filter />
            <h1>пицца</h1>
            <div className="pizza__box-body"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
