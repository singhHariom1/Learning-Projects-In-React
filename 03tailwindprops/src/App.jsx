import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let user1={
    name:"Hariom Singh",
    designation:"Software Engineer",
    para:"“Hariom Singh is going to be a great Software Engineer.”",
    imgSource:"/public/Avatar Image.jpg"
  }

  let user2={
    name:"Griffith",
    designation:"Band of the Falcon",
    para:"“Griffith is going to be the demon king.”",
    imgSource:"/public/Griffith.webp"
  }

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite With Tailwind!</h1>
      <Card {...user1} />
      <Card {...user2} />
      <Card />
    </>
  )
}

export default App
