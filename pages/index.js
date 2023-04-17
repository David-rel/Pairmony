import React, { useState, useEffect, useRef } from 'react'
import useIntersectionObserver from '../utils/useIntersectionObserver'
import Link from 'next/link'
import Footer from '../components/footer'
import 'tailwindcss/tailwind.css'


export default function Home() {
  const [opacity, setOpacity] = useState(1)

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const scrollY = window.scrollY
    const fadeSpeed = 2 // You can adjust this value to control the fade speed
    const newOpacity = 1 - (scrollY / windowHeight) * fadeSpeed
    setOpacity(newOpacity)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const nextjsRef = useRef(null)
  const tailwindcssRef = useRef(null)
  const vercelRef = useRef(null)
  const supabaseRef = useRef(null)
  const herokuRef = useRef(null)
  const weviateRef = useRef(null)
  const PostgreSQLRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)
  const GitHubRef = useRef(null)
  const CoffeeRef = useRef(null)
  const authRef = useRef(null)

  // Add useIntersectionObserver hooks for each element
  const nextjsVisible = useIntersectionObserver(nextjsRef, {})
  const tailwindcssVisible = useIntersectionObserver(tailwindcssRef, {})
  const vercelVisible = useIntersectionObserver(vercelRef, {})
  const supabaseVisible = useIntersectionObserver(supabaseRef, {})
  const herokuVisible = useIntersectionObserver(herokuRef, {})
  const PostgresSQLVisible = useIntersectionObserver(PostgreSQLRef, {})
  const imageVisible = useIntersectionObserver(imageRef, {})
  const textVisible = useIntersectionObserver(textRef, {})
  const GitHubVisible = useIntersectionObserver(GitHubRef, {})
  const CoffeeVisible = useIntersectionObserver(CoffeeRef, {})
  const authVisible = useIntersectionObserver(authRef, {})
  const weviateVisible = useIntersectionObserver(weviateRef, {})

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const [isAnimationVisible, setIsAnimationVisible] = useState(true)



  useEffect(() => {
    // Move the state initialization inside this effect
    setIsAnimationVisible(!sessionStorage.getItem('animationPlayed'))

    const handleAnimation = () => {
      if (isAnimationVisible) {
        setTimeout(() => {
          setIsAnimationVisible(false)
          sessionStorage.setItem('animationPlayed', true)
        }, 2000) // Animation duration
      }
    }

    handleAnimation()
  }, [isAnimationVisible])

  return (
    <div className="relative">
      {isAnimationVisible && (
        <div className="fixed inset-0 bg-pink-500 flex justify-center items-center z-50">
          <div className="animate-heart-scale">
            <svg
              className="w-32 h-32 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.14 4.5 2.55C13.09 4.14 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
      )}
      <div className="">
        <div className="relative h-screen">
          <img
            src="/images/background.jpeg"
            alt="Landing Page Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-40" />
          <nav className="absolute top-0 left-0 w-full px-10 py-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-10">
                <Link href="/">
                  <img
                    src="/static/tinder.png"
                    alt="Your Logo"
                    className="h-24 w-auto"
                  />
                </Link>
                <ul className="hidden sm:flex items-center space-x-6 text-black text-xl">
                  <li>
                    <Link
                      href="/learn"
                      className="hover:text-red-500 hover:underline"
                    >
                      Learn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-red-500 hover:underline"
                    >
                      About the Creator
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/support"
                      className="hover:text-red-500 hover:underline"
                    >
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/app"
                      className="hover:text-red-500 hover:underline"
                    >
                      Main App
                    </Link>
                  </li>
                </ul>
              </div>
              <Link href="/login" className="hidden sm:inline-flex">
                <button className="bg-gradient-to-r from-red-500 to-pink-200 text-black font-bold px-8 py-2 text-lg rounded-full hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-100">
                  Log in
                </button>
              </Link>
              <div className="flex sm:hidden items-center space-x-10">
                <Link href="/login">
                  <button className="bg-gradient-to-r from-red-500 to-pink-200 text-black font-bold px-8 py-2 text-lg rounded-full hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-100">
                    Log in
                  </button>
                </Link>
                <button
                  onClick={toggleMobileMenu}
                  className="text-black text-3xl hover:text-red-500"
                >
                  ☰
                </button>
              </div>
            </div>
            {mobileMenuOpen && (
              <div
                ref={mobileMenuRef}
                className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-10 p-10"
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-black text-3xl hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
                <hr className="border-gray-300 mb-6" />
                <ul className="space-y-6 text-black text-xl">
                  <li>
                    <Link href="/learn" legacyBehavior>
                      <p className="hover:text-red-500 hover:underline cursor-pointer">
                        Learn
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" legacyBehavior>
                      <p className="hover:text-red-500 hover:underline cursor-pointer">
                        About the Creator
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/support" legacyBehavior>
                      <p className="hover:text-red-500 hover:underline cursor-pointer">
                        Support
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/app"
                      className="hover:text-red-500 hover:underline"
                      legacyBehavior
                    >
                      <p className="hover:text-red-500 hover:underline cursor-pointer">
                        Main App
                      </p>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </nav>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1
              style={{ opacity: opacity }}
              className="text-4xl md:text-8xl font-bold text-white mb-6 whitespace-nowrap"
            >
              Welcome to Pairmony
            </h1>
            <Link href="/signup">
              <button
                style={{ opacity: opacity }}
                className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 md:px-16 py-3 text-sm md:text-xl rounded-full font-bold hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="relative h-screen">
          {/* Technology Used Section */}
          <section className="bg-black text-white py-20 px-10">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold text-center mb-8">
                Technology Used
              </h2>
              <p className="text-center text-xl mb-12">
                We use cutting-edge technologies to provide a seamless and
                high-quality user experience.
              </p>
            </div>

            {/* Frontend */}
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-center mb-8">
              Frontend
            </h3>
            <div className="grid grid-cols-1 md:space-y-16 md:mb-12 pb-4">
              {/* Next.js */}
              <div
                ref={nextjsRef}
                className={` flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  nextjsVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/nextjs.png"
                  alt="Next.js"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Next.js
                  </h4>
                  <p className="text-xl">
                    A modern React framework for building fast, scalable web
                    applications.
                  </p>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div
                ref={tailwindcssRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  tailwindcssVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/tailwindcss.png"
                  alt="Tailwind CSS"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Tailwind CSS
                  </h4>
                  <p className="text-xl">
                    A utility-first CSS framework for rapid UI development.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend */}
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-center mb-8">
              Backend
            </h3>
            <div className="grid grid-cols-1 md:space-y-16 md:mb-12">
              {/* Vercel */}
              <div
                ref={vercelRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  vercelVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/vercel.png"
                  alt="Vercel"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Vercel
                  </h4>
                  <p className="text-xl">
                    A cloud platform for static sites and Serverless Functions.
                  </p>
                </div>
              </div>
              {/* Supabase */}
              <div
                ref={supabaseRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  supabaseVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/supabase.png"
                  alt="Supabase"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Supabase
                  </h4>
                  <p className="text-xl">
                    An open-source Firebase alternative, providing real-time
                    databases and authentication.
                  </p>
                </div>
              </div>
              <div
                ref={weviateRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  weviateVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/weviate.jpeg"
                  alt="Supabase"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Weviate
                  </h4>
                  <p className="text-xl">
                    weviate is a vector database that stores and indexes data in
                    a vector space. It is a high-performance, scalable, and
                    open-source database that can be used as a replacement for
                    traditional databases.
                  </p>
                </div>
              </div>

              <div
                ref={herokuRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  herokuVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/heroku.png"
                  alt="Supabase"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Heroku
                  </h4>
                  <p className="text-xl">
                    A cloud platform for static sites and Serverless Functions.
                    Saas platform for hosting web apps.
                  </p>
                </div>
              </div>
            </div>

            {/* Databases */}
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-center mb-8">
              Databases
            </h3>
            <div className="grid grid-cols-1 md:space-y-16 md:mb-12">
              {/* PostgreSQL */}
              <div
                ref={PostgreSQLRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  PostgresSQLVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/postgres.png"
                  alt="PostgreSQL"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    PostgreSQL
                  </h4>
                  <p className="text-xl">
                    A powerful, enterprise-class open-source database system.
                  </p>
                </div>
              </div>

              {/* i2v-neural-1 AI */}
              <div
                ref={imageRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  imageVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/image.png"
                  alt="i2v-neural-1 AI"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    i2v-neural-1 AI
                  </h4>
                  <p className="text-xl">
                    A cutting-edge AI technology for image processing and
                    analysis.
                  </p>
                </div>
              </div>

              {/* context-1 AI */}
              <div
                ref={textRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  textVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/text.png"
                  alt="context-1 AI"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    context-1 AI
                  </h4>
                  <p className="text-xl">
                    An advanced AI technology for natural language processing
                    and understanding.
                  </p>
                </div>
              </div>
            </div>

            {/* Other */}
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-semibold text-center mb-8">
              Other
            </h3>
            <div className="grid grid-cols-1 md:space-y-16">
              {/* Version Control: GitHub */}
              <div
                ref={GitHubRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  GitHubVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/github.png"
                  alt="GitHub"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    GitHub
                  </h4>
                  <p className="text-xl">
                    A web-based hosting service for version control using Git.
                  </p>
                </div>
              </div>

              {/* In-App Purchase: Buy Me a Coffee API */}
              <div
                ref={CoffeeRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  CoffeeVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/coffee.png"
                  alt="Buy Me a Coffee API"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Buy Me a Coffee
                  </h4>
                  <p className="text-xl">
                    A simple and easy-to-use API for accepting support and
                    donations.
                  </p>
                </div>
              </div>

              {/* Authentication: Supabase Auth */}
              <div
                ref={authRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  authVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/auth.png"
                  alt="Supabase Auth"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Supabase Auth
                  </h4>
                  <p className="text-xl">
                    A robust and secure authentication system that integrates
                    seamlessly with your applications.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
        <main className="p-10">
          <h1 className="text-4xl font-bold">Welcome to My Website!</h1>
        </main>
      </div>
    </div>
  )
}
