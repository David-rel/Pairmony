import React from 'react'
import Timeline from '../../components/timeline'
import Skill from '../../components/skill'
import Head from 'next/head'
import HobbyCard from '../../components/hobbyCard'
import Image from 'next/image'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'

const hobbies = [
  {
    title: 'Photography',
    imageSrc: '/images/photography.jpg',
    description: 'Capturing moments and memories through my lens.',
  },
  {
    title: 'Hiking',
    imageSrc: '/images/hiking.jpg',
    description: 'Exploring nature and challenging my limits.',
  },
  {
    title: 'Cooking',
    imageSrc: '/images/cooking.jpg',
    description: 'Creating culinary masterpieces and trying new recipes.',
  },
]

const timelineData = [
  {
    year: '2015',
    title: 'Started Learning Web Development',
    description: 'Began learning HTML, CSS, and JavaScript.',
  },
  {
    year: '2015',
    title: 'Started Learning Web Development',
    description: 'Began learning HTML, CSS, and JavaScript.',
  },
  {
    year: '2015',
    title: 'Started Learning Web Development',
    description: 'Began learning HTML, CSS, and JavaScript.',
  },
  {
    year: '2015',
    title: 'Started Learning Web Development',
    description: 'Began learning HTML, CSS, and JavaScript.',
  },
  {
    year: '2015',
    title: 'Started Learning Web Development',
    description: 'Began learning HTML, CSS, and JavaScript.',
  },
  {
    year: '2015',
    title: 'Started Learning Web Development',
    description: 'Began learning HTML, CSS, and JavaScript.',
  },
  // Add more items here
]

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 80 },
  { name: 'JavaScript', percentage: 75 },
  { name: 'React', percentage: 70 },
  { name: 'Node.js', percentage: 60 },
]

function About() {
  return (
    <div className="">
      <div className="pt">
        <Navbar />
      </div>

      <div className="relative bg-black text-white min-h-screen flex items-center justify-center">
        <img
          src="/path/to/your/image.jpg"
          alt="Background image"
          className="bg-hero-image absolute inset-0 w-full h-full object-cover opacity-0 bg-gray-500"
        />
        <div className="hero-text z-10 opacity-0">
          <h1 className="text-5xl font-bold">Hello, I'm John Doe</h1>
          <h2 className="text-2xl mt-4">I'm a Web Developer & Designer</h2>
          <button className="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
            Contact Me
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center p-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/john_doe.jpg"
            alt="John Doe"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 text-justify">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p>
            Hey there, I'm John Doe! I created this website to share my passion
            for coding and my journey to becoming a developer. Ever since I was
            a child, I've always been fascinated by technology and how it shapes
            our world.
          </p>
          <p className="mt-4">
            I started coding in high school and quickly fell in love with the
            creative problem-solving process it entails. Since then, I've been
            dedicated to learning new languages, frameworks, and techniques to
            create meaningful and innovative projects. This website serves as a
            platform for me to share my experiences, knowledge, and passion with
            others.
          </p>
          <p className="mt-4">
            In my free time, I enjoy hiking, reading, and exploring new
            cuisines. I'm always eager to learn and grow, both as a developer
            and a person. I believe that coding has the power to transform lives
            and create a better future for all. Thank you for joining me on this
            journey!
          </p>
        </div>
      </div>

      <Timeline data={timelineData} />

      <main className="bg-white p-5 rounded shadow">
        <h1 className="text-2xl font-semibold mb-5">Skills</h1>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </main>

      <div>
        <Head>
          <title>My Hobbies and Interests</title>
          <meta
            name="description"
            content="A showcase of my hobbies, interests, and side projects."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 pb-12">
          <h1 className="text-4xl font-bold mt-10 mb-6">
            Hobbies and Interests
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {hobbies.map((hobby, index) => (
              <HobbyCard
                key={index}
                title={hobby.title}
                imageSrc={hobby.imageSrc}
                description={hobby.description}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default About

// /images/github.png
