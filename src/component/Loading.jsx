import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className='h-screen bg-black text-white flex justify-center items-center '>
        <div className='h-25 w-25 animate-spin flex justify-center items-center rounded-full bg-conic-180 from-white  via-gray-700 to-white '>
          <div className='h-22 w-22  rounded-full bg-black'>

          </div>
        </div>
        <p className='text-white pl-6 text-xl'>Loading...</p>
      </div>
    </div>
  )
}

export default Loading