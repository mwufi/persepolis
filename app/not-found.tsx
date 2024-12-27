import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <div className="relative w-full max-w-2xl aspect-[4/3] mb-8">
        <Image
          src="/sundial.png"
          alt="Sundial"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h2 className="text-2xl font-semibold mb-4">
        Sorry, the creator has not made this page yet.
      </h2>
      <Link 
        href="/" 
        className="text-gray-600 hover:text-gray-900 underline"
      >
        Why not return home?
      </Link>
    </div>
  )
}
