import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Note from './components/Note'
import notes from './notes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.id}
          title={noteItem.title}
          content={noteItem.content}
          date={noteItem.date}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
