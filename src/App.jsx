// import { useState } from 'react'
import './App.css'
import FloorPlan from './FloorPlan'

const bedrooms = [
  {bedNum: 1},
  {bedNum: 2},
  {bedNum: 3}
]
const bathrooms = [
  {size: 'Half'},
  {size: 'Full'}
]

function App() {
  return (
  <>
    <FloorPlan
    bedrooms={bedrooms}
    bathrooms={bathrooms}
    />
  </>
  )
}

export default App
