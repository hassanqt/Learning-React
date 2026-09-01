import React from 'react'
import Left from './Left'
import Right from './Right'

const Center = () => {
  return (
    <div className='w-full h-[85vh] px-20 py-10 flex items-center gap-10'>
        <Left />
        <Right />
    </div>
  )
}

export default Center