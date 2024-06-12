import React from 'react'
import Side_body from '../Body_component/Side_body'
import { Link, Outlet } from 'react-router-dom'
function Body() {

  return (
  <div>
    <Side_body/>
    <div>
      
    </div>
    <Outlet/>
  </div>


 
    
  )
}

export default Body