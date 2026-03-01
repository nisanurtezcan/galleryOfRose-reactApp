import { useState } from 'react'

import './App.css'
import Header from './Header'
import { paintings } from './Data'
import Painting from './components/Painting'
import './css/Painting.css'
import Footer from './Footer'

function App() {
//courses'tan sonra gelen ? bu coursesın içi dolu mu diye
//maps ile dönerken dolu mu boş mu diye kontrol etmek iyidir
//sonra arrow functionın içeriğinde şimdi title id gibi şeyleri component olarak döneceğiz
  return (
    <>
      <Header/>
      <div className='painting-main'>
      {
        paintings?.map((painting)=>(
          <Painting key = {painting.id} painting={painting}/>
        ))
      }
      </div>
      <Footer/>
    </>
  )
}

export default App
