import React, { useEffect, useState } from 'react'

import './App.css'
import Container from './components/Container'

const App = () => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFade(true);
    }, 6000)
  })


  return (
    <div>

      <div className={`loader ${fade ? 'fadeOut' : 'noFade'} `}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div>
          <div className="header">
            <h1>Let's Rock the World</h1>
          </div>
          <Container />
          <div className="footer">
            <h2>Brusooo</h2>
          </div>
        </div>

    </div>
  )
}
export default App