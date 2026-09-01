import React from 'react'
import Card from './Card'

const Right = (props) => {
  return (
    <div className='w-2/3 h-full flex justify-center items-center gap-4'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Right