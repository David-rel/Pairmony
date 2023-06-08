import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Footer from '../components/footer'
import 'tailwindcss/tailwind.css'
import { useRedirectFunctions, withAuthInfo } from '@propelauth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import UploadWidget from '@/components/UploadWidget'
import { CloudinaryContext } from 'cloudinary-react'
import { Image as CloudinaryImage } from 'cloudinary-react'

const Home = withAuthInfo((props) => {
  const { redirectToLoginPage, redirectToSignupPage } = useRedirectFunctions()

  const router = useRouter()

  if (props.isLoggedIn) {
    router.push('app')
  }

  const [uploadedImagePublicId, setUploadedImagePublicId] = useState(null)

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

  //dynamic navigation system
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

  //cool startup animation with session storage
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
                      href="/Tech"
                      className="hover:text-red-500 hover:underline"
                    >
                      Technology Used
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

              <button
                onClick={redirectToLoginPage}
                className="bg-gradient-to-r from-red-500 to-pink-200 text-black font-bold px-8 py-2 text-lg rounded-full hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-100 hidden sm:inline-flex"
              >
                Login
              </button>
              <div className="flex sm:hidden items-center space-x-10 pl-4">
                <button
                  onClick={redirectToLoginPage}
                  className="bg-gradient-to-r from-red-500 to-pink-200 text-black font-bold px-6 py-2 text-lg rounded-full hover:bg-gradient-to-r hover:from-red-400 hover:to-pink-100"
                >
                  Login
                </button>
                <button
                  onClick={toggleMobileMenu}
                  className="text-black text-xl hover:text-red-500"
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
                    <Link href="/Tech" legacyBehavior>
                      <p className="hover:text-red-500 hover:underline cursor-pointer">
                        Technology Used
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

          {/* code for initial view of page startup */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1
              style={{ opacity: opacity }}
              className="text-4xl md:text-8xl font-bold text-white mb-6 whitespace-nowrap"
            >
              Welcome to Pairmony
            </h1>
            <button
              style={{ opacity: opacity }}
              className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 md:px-16 py-3 text-sm md:text-xl rounded-full font-bold hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500"
              onClick={redirectToSignupPage}
            >
              Get Started
            </button>
          </div>
        </div>

        <section className="">
          {/* First section */}
          <div className="flex flex-col md:flex-row items-center justify-center h-screen w-screen bg-blue-200">
            <div className="w-full text-center">
              <h2 className="text-5xl font-semibold">What is Pairmony?</h2>
              <p className="mt-4 text-2xl">
                Pairmony is a groundbreaking dating platform designed to help
                individuals find their perfect match. Our platform uses advanced
                AI algorithms to analyze user preferences and connect them with
                potential partners based on compatibility.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/coffee.png"
                alt="What is Pairmony?"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Second section */}
          <div className="flex flex-col md:flex-row items-center justify-center h-screen w-screen bg-green-200">
            <div className="w-full text-center">
              <h2 className="text-5xl font-semibold">
                What does Pairmony mean?
              </h2>
              <p className="mt-4 text-2xl">
                Pairmony is a combination of the words pair and harmony,
                signifying our mission to create harmonious connections between
                individuals. Our goal is to help users find meaningful
                relationships through our innovative platform.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/coffee.png"
                alt="What does Pairmony mean?"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Third section */}
          <div className="flex flex-col md:flex-row items-center justify-center h-screen w-screen bg-yellow-200">
            <div className="w-full text-center">
              <h2 className="text-5xl font-semibold">How Pairmony works</h2>
              <p className="mt-4 text-2xl">
                Pairmony uses a simple yet effective process to help users find
                their ideal match. Users create a profile, answer a series of
                questions about their preferences, and our AI algorithms analyze
                this information to suggest compatible partners.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/coffee.png"
                alt="How Pairmony works"
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Fourth section */}
          <div className="flex flex-col md:flex-row items-center justify-center h-screen w-screen bg-purple-200">
            <div className="w-full text-center">
              <h2 className="text-5xl font-semibold">
                Our advanced AI algorithms
              </h2>
              <p className="mt-4 text-2xl">
                Pairmony has cutting-edge AI algorithms go beyond simple
                matchmaking. We use deep learning and natural language
                processing to understand user preferences and identify potential
                partners who share similar values, interests, and goals.
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/images/coffee.png"
                alt="Our advanced AI algorithms"
                width={400}
                height={400}
              />
            </div>
          </div>
        </section>

        {uploadedImagePublicId && (
          <CloudinaryContext cloudName="dyxkxy28a">
            <CloudinaryImage publicId={uploadedImagePublicId} />
          </CloudinaryContext>
        )}

        <UploadWidget
          onUpload={(error, result) => {
            if (result.event === 'success') {
              setUploadedImagePublicId(result.info.public_id)
            }
          }}
        >
          {({ open }) => {
            function handleOnClick(e) {
              e.preventDefault()
              open()
            }
            return <button onClick={handleOnClick}>Upload an Image</button>
          }}
        </UploadWidget>

        <Footer />
      </div>
    </div>
  )
})

export default Home
