import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'


 

function Navbar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const mobileMenuRef = useRef(null)

    useEffect(() => {
      const handleClickOutside = (e) => {
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(e.target)
        ) {
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


  return (
    <div>
      <nav className="bg-white w-full px-10 py-3 z-50">
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
    </div>
  )
}

export default Navbar