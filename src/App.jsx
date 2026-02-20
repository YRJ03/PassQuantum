import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import PGCard from './components/PGCard'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main className='w-full h-screen flex flex-col items-center justify-statrt'>
      <Header theme={theme} setTheme={setTheme}/>
      <PGCard theme={theme} />
      <Footer />
    </main>
  )
}

export default App