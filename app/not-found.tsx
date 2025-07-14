import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4">FOUR-0-FOUR</h1>
      <p className="text-zinc-400 text-center max-w-md mb-6">
        The page you&apos;re looking for doesn&apos;t exist. Either you&apos;re lost or something&apos;s broken.
      </p>
      <Link
        href="/"
        className="text-white bg-black border border-gray-700 px-4 py-2 rounded-md transition"
      >
        Go Back
      </Link>
    </section>
  )
}