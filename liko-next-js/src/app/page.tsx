export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Welcome to Liko Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Creative Agency & Portfolio Template
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="/about" 
            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition"
          >
            About Me
          </a>
          <a 
            href="/portfolio" 
            className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </main>
  )
}