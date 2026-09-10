import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center gap-2 text-white">
        <div className='bg-black -z-10 fixed inset-0'>Page not found</div>
        <Link href="/">Create short link</Link>
    </div>
  )
}

export default page