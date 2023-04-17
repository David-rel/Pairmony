import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-pink-100 from-lightred-200 via-pink-200 to-lightpink-200">
      <Navbar />

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Learn About Pairmony
        </h1>

        <section className="space-y-12">
          {/* First section */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
             // src="/images/coffee.png"
              alt="What is Pairmony?"
              width={400}
              height={400}
            />
            <div className="mt-4 md:mt-0 md:ml-8">
              <h2 className="text-2xl font-semibold">What is Pairmony?</h2>
              <p className="mt-2">
                Pairmony is a groundbreaking dating platform designed to help
                individuals find their perfect match. Our platform uses advanced
                AI algorithms to analyze user preferences and connect them with
                potential partners based on compatibility.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                Learn More
              </button>
            </div>
          </div>
          <hr className="border-black" />

          {/* Second section */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mt-4 md:mt-0 md:ml-8">
              <h2 className="text-2xl font-semibold">
                What does Pairmony mean?
              </h2>
              <p className="mt-2">
                Pairmony is a combination of the words pair and harmony,
                signifying our mission to create harmonious connections between
                individuals. Our goal is to help users find meaningful
                relationships through our innovative platform.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                Learn More
              </button>
            </div>
            <Image
            //  src="/images/coffee.png"
              alt="What does Pairmony mean?"
              width={400}
              height={400}
            />
          </div>
          <hr className="border-black" />

          {/* Third section */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Image
             // src="/images/coffee.png"
              alt="How Pairmony works"
              width={400}
              height={400}
            />
            <div className="mt-4 md:mt-0 md:ml-8">
              <h2 className="text-2xl font-semibold">How Pairmony works</h2>
              <p className="mt-2">
                Pairmony uses a simple yet effective process to help users find
                their ideal match. Users create a profile, answer a series of
                questions about their preferences, and our AI algorithms analyze
                this information to suggest compatible partners.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                Learn More
              </button>
            </div>
          </div>
          <hr className="border-black" />

          {/* Fourth section */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="mt-4 md:mt-0 md:ml-8">
              <h2 className="text-2xl font-semibold">
                Our advanced AI algorithms
              </h2>
              <p className="mt-2">
                Pairmony is cutting-edge AI algorithms go beyond simple
                matchmaking. We use deep learning and natural language
                processing to understand user preferences and identify potential
                partners who share similar values, interests, and goals.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
                Learn More
              </button>
            </div>
            <Image
             // src="/images/coffee.png"
              alt="Our advanced AI algorithms"
              width={400}
              height={400}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
