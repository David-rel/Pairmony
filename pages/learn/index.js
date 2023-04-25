import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container">
        <h1 className="text-8xl font-bold text-center mb-12 ml-20">
          Learn About Pairmony
        </h1>

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
      </div>
      <Footer />
    </div>
  )
}


