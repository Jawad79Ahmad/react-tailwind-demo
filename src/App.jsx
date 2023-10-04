import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-2xl text-gray-500'>Tailwind Test</h1>
      <button className='mx-auto px-4 py-2 font-semibold bg-blue-500 hover:bg-white border hover:border-blue-500 hover:text-blue-500 rounded-lg text-white ' onClick={() => setCount((count) => count + 1)}>
          {count} Times Clicked
        </button>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        <Card title='Jawad Ahmad' age='24' />
        <Card title='Ameer Hamza' age='27' />
        <Card title='Abbas Anwar' />
      </div>
    </div>
  )
}

export default App
