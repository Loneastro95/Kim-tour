import React from 'react'
import Navbar from './top-header/navbar'
import Filters from './filter/filters'
import Search from '../search/search'
const header = () => {
  return (
    <div>
     <Navbar/>
     <Search/>
    <Filters/>   
    </div>
    
  )
}

export default header