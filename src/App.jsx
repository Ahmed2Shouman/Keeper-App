import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  )
}

export default App
