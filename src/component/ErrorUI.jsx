import React from 'react'

const ErrorUI = ({error}) => {
  return (
    <div>
        <div className='bg-black h-screen flex items-center justify-center'>
          <p className='text-red-500 text-2xl'>
             {error}
        
          </p>
        </div>
    </div>
  )
}

export default ErrorUI