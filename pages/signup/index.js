import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


export default function Signup() {
  return (
    <div>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('images/auth.png')" }}
      >
        <div className="bg-white bg-opacity-90 rounded-lg p-8 shadow-lg w-96">
          <h1 className="text-2xl font-semibold mb-6">Sign Up</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account?{' '}
            <Link href="/login" legacyBehavior>
              <a className="text-blue-500 hover:underline">Log in</a>
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
