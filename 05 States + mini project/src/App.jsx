import { useState } from 'react'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const App = () => {

  let [counter, setCounter] = useState(0);

  let addValue = () => {
    setCounter(++counter);
  }

  let removeValue = () => {
    if (counter <= 0) return
    setCounter(--counter);
  }

  return (
    <div className='w-screen h-screen bg-gray-700 text-white text-2xl flex flex-col justify-center gap-4 items-center'>
      <h1>React Counter</h1>
      <div className='flex justify-center items-center gap-6'>
        <IoLogoJavascript className='w-24 h-24' />
        <FaReact className='animate-spin [animation-duration:60s] w-24 h-24' />
      </div>
      <h2>Counter value: {counter}</h2>
      <div className='flex felx-col justify-center items-center gap-4'>
        <button onClick={addValue} className='cursor-pointer border border-blue-300 active:border-blue-400 px-6 py-2 bg-gray-900 text-lg rounded-lg'>Add Value</button>
        <br />
        <button onClick={removeValue} className='cursor-pointer border border-rose-300 active:border-rose-400 px-6 py-2 bg-gray-900 text-lg rounded-lg'>Remove Value</button>
      </div>
    </div >
  )
}

export default App
