import React, { useState, useEffect, useRef } from 'react'
import useIntersectionObserver from '../../utils/useIntersectionObserver'
import Footer from '../../components/footer'
import 'tailwindcss/tailwind.css'
import {
  useLogoutFunction,
  useRedirectFunctions,
  withAuthInfo,
} from '@propelauth/react'
import { useRouter } from 'next/router'
import Navbar from '@/components/navbar'

const Home = withAuthInfo((props) => {
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } =
    useRedirectFunctions()
  const logoutFunction = useLogoutFunction()

  const router = useRouter()

  if (props.isLoggedIn) {
    router.push('app')
  }

  //cool scroll fade away

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
  const cloudinaryRef = useRef(null)
  const PostgreSQLRef = useRef(null)
  const GitHubRef = useRef(null)
  const CoffeeRef = useRef(null)
  const authRef = useRef(null)

  // Add useIntersectionObserver hooks for each element
  const nextjsVisible = useIntersectionObserver(nextjsRef, {})
  const tailwindcssVisible = useIntersectionObserver(tailwindcssRef, {})
  const vercelVisible = useIntersectionObserver(vercelRef, {})
  const supabaseVisible = useIntersectionObserver(supabaseRef, {})
  const CloudinaryVisible = useIntersectionObserver(cloudinaryRef, {})
  const PostgresSQLVisible = useIntersectionObserver(PostgreSQLRef, {})
  const GitHubVisible = useIntersectionObserver(GitHubRef, {})
  const CoffeeVisible = useIntersectionObserver(CoffeeRef, {})
  const authVisible = useIntersectionObserver(authRef, {})


     if (props.isLoggedIn) {
       router.push('app')
     }




  return (
    <div className="relative">
      <Navbar />

      <div className="">
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
                  src="/images/fauna.png"
                  alt="Supabase"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Fauna DB
                  </h4>
                  <p className="text-xl">
                    A cloud platform for static sites and Serverless Functions.
                  </p>
                </div>
              </div>

              <div
                ref={cloudinaryRef}
                className={`flex flex-col items-center md:flex-row md:items-center border-2 border-white p-4 rounded-lg ${
                  CloudinaryVisible ? 'animate-slideFromLeft' : 'opacity-0'
                }`}
              >
                <img
                  src="/images/cloudinary.jpeg"
                  alt="Supabase"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Cloudinary
                  </h4>
                  <p className="text-xl">
                    A cloud platform for storing images and videos.
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
                  src="/images/bson.jpeg"
                  alt="PostgreSQL"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    BSON
                  </h4>
                  <p className="text-xl">
                    A document-oriented database program.
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
                  src="/images/propel.png"
                  alt="Propel Auth"
                  className="h-32 w-auto mb-4 md:h-48 md:w-auto md:mx-4"
                />
                <div>
                  <h4 className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-2">
                    Propel Auth
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
      </div>
    </div>
  )
})

export default Home
