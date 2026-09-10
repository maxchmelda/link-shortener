import CreateLink from '@/components/CreateLink'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full min-h-screen flex flex-col justify-center items-center gap-2 text-white'>
      <div className='bg-black -z-10 fixed inset-0'></div>

      <div>
        <h1 className='font-bold text-5xl'>Short link generator</h1>
        <h2 className='font-light text-lg'>Generate short links</h2>
      </div>

      <CreateLink />

    </div>
  )
}

export default page