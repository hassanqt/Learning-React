import React from 'react'
import { ArrowUpRight } from "lucide-react";

const Left = () => {
  return (
    <div className='w-1/3 h-full px-2 flex flex-col items-start justify-between'>
        <div className='flex flex-col gap-6'>
            <h1 className='text-6xl/14 font-bold'>Prospective <br />Customer <br />Segmentation</h1>
            <p className='text-gray-700'>Lorem, ipsum dolor sit amet elit. Officia, ut officiis, sequi itaque, cupiditate commodi labore quisquam tempora et placeat modi adipisci ratione.</p>
        </div>
        <ArrowUpRight className='size-16' />
    </div>
  )
}

export default Left