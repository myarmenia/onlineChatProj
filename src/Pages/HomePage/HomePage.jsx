import React from 'react'
import './homePage.css'
import Title from '../../Components/HomePage/Title/Title'
import Header from '../../Components/HomePage/Header/Header'
import HomeSection from '../../Components/HomePage/HomeSection/HomeSection'

const HomePage = () => {
  return (
    <div>
        <Title/>
        <Header/>
        <HomeSection/>
    </div>
  )
}

export default HomePage