import React from 'react'
import Ads from './components/ads'
import {Banner} from './components/banner'
import CatalogBanner from './components/catalog-banner'
import Phones from './components/phones'

const Home = () => {
  return (
    <div>
      <Banner/>
      <CatalogBanner/>
      <Phones/>
      <Ads/>
    </div>
  )
}

export default Home
