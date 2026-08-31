import React from 'react'

const Card = (props) => {

    console.log(props);
  return (
    <div className='py-10 px-8 bg-linear-to-bl bg-rose-400 hover:bg-rose-400/95 text-white flex justify-center rounded-2xl items-center flex-col gap-2'>
        <img src={props.image} className='border border-black size-50 object-center rounded-full' alt="an image" />
        <a href='https://github.com/hassanqt/' target='_blank' className='text-2xl font-bold cursor-pointer'>{props.name}</a>
        <p className='font-bold'>Age: {props.age}</p>
        <p className='w-60 text-center'>{props.desc}</p>
        <button className='bg-pink-500 px-8 py-2 rounded-full cursor-pointer border border-black hover:bg-pink-600 active:translate-y-0.5 transition-all'>{props.option}</button>
    </div>
  )
}

export default Card