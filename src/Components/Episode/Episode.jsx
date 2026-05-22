import React from 'react'
import Header from '../Header/Header'
import Allepisode from './Allepisode'
import Book from './Book'
import Footer from './Footer'


const Episodes = () => {
  return (
    <div>

      <div>
        <Header />
      </div>
      <div>
        <Allepisode />
      </div>
      <div>
        <Book />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Episodes