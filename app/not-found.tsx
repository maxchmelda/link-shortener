import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className='w-full h-full min-h-dvh flex flex-col justify-center items-center gap-6 px-4 text-foreground'>
      <div className='fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.24_0.05_270)_0%,oklch(0.09_0.012_264)_55%,oklch(0.07_0.01_264)_100%)]'></div>

      <div className='flex flex-col items-center gap-3 text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-700 ease-out'>
        <span className='bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl md:text-8xl'>
          404
        </span>
        <h1 className='text-xl font-semibold sm:text-2xl'>This link doesn&apos;t exist</h1>
        <p className='max-w-sm text-muted-foreground'>
          The short link you followed may be broken, expired, or never existed.
        </p>
      </div>

      <Link
        href="/"
        className={buttonVariants({
          variant: "default",
          className: "rounded-xl transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97]",
        })}
      >
        Go back home
      </Link>
    </div>
  )
}
