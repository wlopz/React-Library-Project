// rfce

import React from 'react'
import Landing from '../components/Landing'
import Highlights from '../components/Highlights'
import Featured from '../components/Featured'
import Discounted from '../components/Discounted'
import Explore from '../components/Explore'
import { Helmet } from 'react-helmet'


function Home() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="./assets/book.png" type="image/png" />
        <title>Library - Find your dream book</title>
      </Helmet>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  )
}

export default Home