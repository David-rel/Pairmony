import Link from 'next/link'
import React from 'react'

function footer() {
  return (
    <div class="bg-black text-white">
      <footer class="container mx-auto px-6 py-8">
        <div class="mb-8">
          <h2 class="text-xl font-semibold">Pairmony</h2>
          <p class="mt-4 text-gray-300">
            Single people, listen up: If you’re looking for love, want to start
            dating, or just keep it casual, you need to be on Pairmony. With over
            55 billion matches made, it’s the place to be to meet your next best
            match. Let’s be real, the dating landscape looks very different
            today, as most people are meeting online. With Pairmony, the world’s
            most popular free dating app, you have millions of other single
            people at your fingertips and they’re all ready to meet someone like
            you. Whether you’re straight or in the LGBTQIA community, Pairmony’s
            here to bring you all the sparks.
          </p>
          <p class="mt-4 text-gray-300">
            There really is something for everyone on Pairmony. Want to get into a
            relationship? You got it. Trying to find some new friends? Say no
            more. New kid on campus and looking to make the most of your college
            experience? Pairmony U’s got you covered. Pairmony isn’t your average
            dating site — it’s the most diverse dating app, where adults of all
            backgrounds and experiences are invited to make connections,
            memories, and everything in between.
          </p>
        </div>
        <hr class="border-gray-600" />
        <div class="flex justify-between items-center mt-6">
          <div>
            <Link href="/learn" class="text-gray-300 hover:text-white ">
              Learn
            </Link>
            /
            <Link href="/about" class="text-gray-300 hover:text-white">
              About
            </Link>
            /
            <Link href="/support" class="text-gray-300 hover:text-white">
              Support
            </Link>
            /
            <Link href="/app" class="text-gray-300 hover:text-white">
              App
            </Link>
          </div>
          <p class="text-gray-300">All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default footer