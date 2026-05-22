import React from 'react'
import Video from './Video'
import Header from '../Header/Header'
import Episode from './Episode'
import Book from './Book'
import Footer from './Footer'



const Series = () => {
    return (
        <div className='relative'>

            <div>
                <Header />
            </div>

            <div>
                <Video />
            </div>

            <div>
                <Episode />
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

export default Series