import React from 'react'
import Left from './Left'
import Right from './Right'

const Center = (props) => {
  return (
    <div className='w-full h-[85vh] px-20 py-10 flex items-center gap-10'>
        <Left />
        <Right users={props.users} />
    </div>
  )
}

export default Center