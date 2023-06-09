import React from 'react'
import Timeline from '../../components/timeline'
import Skill from '../../components/skill'
import Head from 'next/head'
import HobbyCard from '../../components/hobbyCard'
import Image from 'next/image'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Link from 'next/link'
import {
  useLogoutFunction,
  useRedirectFunctions,
  withAuthInfo,
} from '@propelauth/react'
import { useRouter } from 'next/router'

const hobbies = [
  {
    title: 'Soccer',
    imageSrc: '/static/soccer.jpeg',
    description: 'love watching soccer and playing the worlds game.',
  },
  {
    title: 'Mentoring and Coaching',
    imageSrc: '/static/mentoring.webp',
    description: 'teaching and coaching kids in my passions.',
  },
  {
    title: 'cooking',
    imageSrc: '/static/cooking.jpeg',
    description: 'Creating culinary masterpieces and trying new recipes.',
  },
  {
    title: 'boating',
    imageSrc: '/static/boating.jpeg',
    description:
      'I love being on the water and going fast especially in lakes.',
  },
  {
    title: 'paddle boarding',
    imageSrc: '/static/paddle.jpeg',
    description:
      'My favourite exercise of them all because I love being on water on a hot day.',
  },
  {
    title: 'video games',
    imageSrc: '/static/video.webp',
    description:
      'Settling down to play a few hours of video games is one of my favourite ways to relax. I love Minecraft and VR stuff',
  },
  {
    title: 'stocks and crypto',
    imageSrc: '/static/stocks.jpeg',
    description:
      'I love investing in stocks and crypto and learning about the market.',
  },
  {
    title: 'robotics',
    imageSrc: '/static/robotics.jpeg',
    description:
      'I love building robots and learning about how they work and how to program them.',
  },
]

const timelineData = [
  {
    year: '2020',
    title: 'Started Learning basic coding learning',
    description: 'Began learning Java and Python',
  },
  {
    year: '2021',
    title: 'Started Learning Web Development',
    description: 'Began learning HTML, CSS, and JavaScript.',
  },
  {
    year: '2022',
    title: 'Started creating actual website projects',
    description: 'Using next.js, node, and tailwind css',
  },
  {
    year: '2022',
    title: 'Built Chirp a twitter clone and got a lot people on it',
    description: 'The first ever project ever created that actually did well',
  },
  {
    year: '2023',
    title: 'Learning AI and machine learning',
    description: 'Learning about LangChain and Vector Databases',
  },
  {
    year: '2023',
    title: 'Starting a website that uses AI and vector databases',
    description: 'Began building a full stack application using AI',
  },
  // Add more items here
]

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 80 },
  { name: 'JavaScript', percentage: 90 },
  { name: 'React', percentage: 90 },
  { name: 'Node.js', percentage: 100 },
  { name: 'Next.js', percentage: 90 },
  { name: 'Supabase', percentage: 90 },
  { name: 'Postgres', percentage: 70 },
  { name: 'SQL', percentage: 50 },
  { name: 'Lang Chain', percentage: 30 },
]



const About = withAuthInfo((props) => {

    const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } =
    useRedirectFunctions()
  const logoutFunction = useLogoutFunction()

  const router = useRouter()


     if (props.isLoggedIn) {
       router.push('app')
     }


  return (
    <div className="">
      <div className="pt">
        <Navbar />
      </div>

      <div className="relative bg-black text-white min-h-screen flex items-center justify-center">
        <img
          src="./static/us.jpeg"
          alt="Background image"
          className="bg-hero-image absolute inset-0 w-full h-full object-cover opacity-0 bg-gray-500"
        />
        <div className="hero-text z-10 opacity-0">
          <h1 className="text-5xl font-bold">Hello, I am David Fales</h1>
          <h2 className="text-2xl mt-4">I am a Full Stack Developer</h2>
          <Link href="/support">
            <button className="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
              Contact Me
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center p-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/static/me.jpeg"
            alt="John Doe"
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8 text-justify">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p>
            Hey there, I am David Fales! I created this website to share my
            passion for coding and my journey to becoming a developer. I wanted
            to create this website to showcase my AI and full stack ability. I
            love to code and I love to create. Coding is my life and my passion.
          </p>
          <p className="mt-4">
            I started coding in high school and quickly fell in love with the
            creative problem-solving process it entails. Since then, I have been
            dedicated to learning new languages, frameworks, and techniques to
            create meaningful and innovative projects. This website serves as a
            platform for me to share my experiences, knowledge, and passion with
            others.
          </p>
          <p className="mt-4">
            I work at the robotics club, Programming club and AI club at my
            school, I am also in NHS and the student leadership team at my
            school as well. I am always eager to learn and grow, both as a
            developer and a person. I believe that coding has the power to
            transform lives and create a better future for all. Thank you for
            joining me on this journey!
          </p>
          <br />
          <Link href="/support">
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
              Contact Me
            </button>
          </Link>
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
})

export default About

// /images/github.png
