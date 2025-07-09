import React, { useState } from 'react'
import './Home.css'
import Header from '../../compomemts/Header/Header'
import ExploreMenu from '../../compomemts/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../compomemts/FoodDisplay/FoodDisplay'

const Home = () => {

  const [category, setCategory] = useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu  category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Home