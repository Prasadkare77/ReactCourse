import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObjects = {
    username: 'Prasad',
    age: 21,
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>

      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/206676/pexels-photo-206676.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" width="384" height="512"/>
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div className="text-sky-50">
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> */}

      <Card username="Prasad" btnText="Click Me" />
      <Card username="Akshita" btnText="Visit Me"/>

    </>
  )
}

export default App
