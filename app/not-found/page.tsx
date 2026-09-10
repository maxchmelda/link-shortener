"use client";

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import DotField from '@/components/DotField'

const page = () => {
  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center items-center gap-6 px-4 text-foreground">
    <div className='fixed inset-0 -z-10'>
          <DotField
            dotRadius={1.5}
            dotSpacing={32}
            bulgeStrength={67}
            glowRadius={0}
            sparkle={false}
            waveAmplitude={2}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#A855F7"
            gradientTo="#B497CF"
            glowColor="#120F17"
        />
      </div>

      <div className='flex flex-col items-center gap-3 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-700 ease-out'>
        <span className='text-7xl font-bold tracking-tight text-foreground sm:text-8xl'>
          404
        </span>
        <h1 className='text-2xl font-semibold'>Page not found</h1>
        <p className='max-w-sm text-muted-foreground'>
          This short link doesn&apos;t exist, is broken, or has expired.
        </p>
      </div>

      <Link
        href="/"
        className={buttonVariants({
          variant: "default",
          className: "px-6 py-5 rounded-xl transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]",
        })}
      >
        Create short link
      </Link>
    </div>
  )
}

export default page
