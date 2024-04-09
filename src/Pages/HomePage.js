import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import PopularCategory from '../Components/PopularCategory/PopularCategory'
import PopularListing from '../Components/PopularListing/PopularListing'
import Footer from '../Components/Footer/Footer'

function HomePage() {
  return (
    <>
      <HeroSection/>
      <PopularCategory heading={"MOST POPULAR CATEGORIES"} show_btn={true}/>
      <PopularListing/>
      <Footer/>
    </>
  )
}

export default HomePage
