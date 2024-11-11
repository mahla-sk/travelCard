import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header"
import Card from "./Card"
import data from "./data"
function App() {
  const cards=data.map(item=>{return(<><Card key={item.id} {...item} /> </>)})

  return (
    <div className='App'>
      <Header/>
      <div className='toscroll'>
      <section className='cards_lists'>
        {cards}
      </section>
      </div>
    </div>
  )
}

export default App
