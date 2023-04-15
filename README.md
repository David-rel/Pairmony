# Pairmony

Pairmony is a Tinder clone built using Next.js, Tailwind CSS, Supabase, Weaviate, and deployed on Vercel. This project aims to replicate the user experience of the popular dating app, Tinder, while showcasing the power and flexibility of these modern web development tools.

## Table of Contents

- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [About the Creator](#about-the-creator)

## Getting Started

To set up Pairmony locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pairmony.git
cd pairmony
```

2. Install dependencies:
```bask
npm install .
```


3. Create a Supabase account and set up a new project.

4. Set up Weaviate vector databases using two `curl` commands and two `docker-compose` commands. Detailed instructions can be found in the [Weaviate documentation](https://www.semi.technology/documentation/weaviate/current/index.html).

5. Create a `.env.local` file in the project root directory and populate it with the necessary credentials from your Supabase and Weaviate projects:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

6. Start the development server:
```bash
npm run dev
```


7. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Tech Stack

- **Next.js**: A framework for building server-rendered React applications with features like static site generation and API routes.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vercel**: A platform for deploying, scaling, and monitoring Next.js applications.
- **Supabase**: An open-source Firebase alternative that provides real-time databases, authentication, and serverless functions.
- **Weaviate**: A scalable, open-source knowledge graph that uses vector search for semantic search and data classification.
- **Docker**: A platform for developing, shipping, and running applications in containers.
- **Heroku**: A platform as a service (PaaS) that enables developers to build, run, and operate applications in the cloud.
- **Buy Me A Coffee API**: An API that allows users to support the creator by buying them a coffee.

## About the Creator

[David Fales](https://my-portfolio-ccab3.web.app/) is a passionate web developer with experience in modern web technologies. They are always eager to learn and explore new tools, frameworks, and libraries to create innovative solutions. You can follow their journey on [GitHub](https://github.com/David-rel), [Twitter](https://twitter.com/_David_Rel), and [Instagram](https://www.instagram.com/_david_rel/).
