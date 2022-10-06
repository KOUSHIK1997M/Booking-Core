import React from 'react'
import Navbar from '../Navbar/Navbar'
import MainHade from './MainHade'
import Offers from './offers'
import data from '../../data/data.json'
import BestPlace from './BestPlace'
import Product from './Product'
import Blogs from './Blogs'
import Footer from '../Footer/Footer'
import {BrowserRouter as Router} from 'react-router-dom'


export default function Main() {
  return (
    <Router className='scrollbar'>
      <Navbar className='fixed'/>
      <MainHade className='main-head'/>
      <Offers offer={data.offers} />
      <Product item={data.headData} Pdata={data.pakeges}/>
      <BestPlace item={data.headData} Pdata={data.Revies}/>
      <Blogs item={data.headData} Pdata={data.blog}/>
      <Footer foonav={data.foonav}/>
    </Router>
  )
}
