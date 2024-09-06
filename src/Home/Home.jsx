import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'

const Home = () => {
  return (
    <div>
      <div>
        <Banner/>
        <HomeCategory/>
        <CategoryShowCase/>
      </div>
    </div>
  )
}

export default Home
