import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRatings from './components/star_ratings/StarRatings'

function App() {


  return (
    <>
   <StarRatings noOfStars={10}/>
    </>
  )
}

export default App
