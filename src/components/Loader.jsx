import React from 'react'

export default function Loader() {
  return (
      <div className='w-12 h-10 flex justify-evenly items-center'> 
          
        <div className='w-3 h-3 bg-white rounded-full animate-bounce' />
        <div className='w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:100ms] ' />
        <div className='w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:200ms] ' />


    </div>
  )
}
