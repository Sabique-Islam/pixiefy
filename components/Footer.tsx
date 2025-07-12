export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-black text-white py-10 px-4 flex flex-col items-center">
      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <p className="text-sm text-zinc-400">&copy; {new Date().getFullYear()} Pixiefy. All rights reserved.</p>
       <p className="text-sm text-zinc-400 italic">Because boring links are so 2010</p>
      </div>
    </footer>
  )
}
