import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testomonialsection from '../components/Testomonialsection'
import ButtonSection from '../components/ButtonSection'

const Home = () => {
  return (
    <div>
      <Header/>
      <Steps/>
      <Description/>
      <Testomonialsection/>
      <ButtonSection/>
    </div>
  )
}

export default Home
