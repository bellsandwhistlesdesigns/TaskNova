# TaskNova

![Next.js](https://img.shields.io/badge/Next.js-Framework-black?logo=nextdotjs)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?logo=supabase)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)
![Status](https://img.shields.io/badge/Status-Active%20Development-orange)

I am building a modern Project Management Platform — one iteration at a time.

TaskNova is an evolving web application designed to help project managers organize projects and tasks of employees efficiently.

This project is being developed publicly as an iterative SaaS experiment. Where design, functionality, and architecture are continuously refined as new ideas are tested and improved.

The application is currently live and under active development:

**https://www.tasknova.ca**
**https://tasknova.ca**

---

## Project Philosophy

TaskNova is being built with a core principle:

> Iteration drives progress.

Features are implemented, tested, improved, and sometimes rebuilt entirely as the product evolves. This repository reflects that ongoing process of experimentation and refinement while building a modern SaaS platform.

The goal is not only to create a very useful project management tool, but also to personally explore more modern web technologies and user experience patterns that can power my future web applications.

---

## Product Vision

TaskNova began as an exploration into building modern web applications from the ground up. The long-term vision is to develop a powerful yet intuitive platform that helps individuals and teams organize projects, track tasks, and maintain momentum in their work.

Beyond its functionality as a project management tool, TaskNova represents a broader personal development journey into modern web architecture, user experience design, and SaaS development. Each iteration of the platform is an opportunity to refine both the product and the process behind building scalable web applications.

Whether TaskNova ultimately evolves into a full SaaS product or becomes the foundation for a future web design and development studio, the guiding goal remains the same: to build thoughtful, well-crafted software designed for the next generation of the web.

---

## Community Impact

Feedback, discussion, and professional connections are always welcome.
Actively seeking opportunities to contribute to modern frontend and full-stack teams.

--- 

## Current Features

* Visually engaging landing page experience
* Supabase-powered authentication system (implemented and now currently being redesigned)
* Project creation and task organization 
* Real-time dashboard structure
* Secure sign-out flow


---

## Technologies Used

**Frontend**

* Next.js

**Backend / Data**

* Supabase Authentication
* Supabase PostgreSQL

**Infrastructure**

* Vercel (hosting and CI/CD)

**Version Control**

* GitHub

---

## Architecture Overview

TaskNova is being built using a modern serverless SaaS architecture designed for scalability and rapid iteration.

graph TD

User[Users] --> Browser[Web Browser]

Browser --> NextJS[Next.js Frontend]

NextJS --> SupabaseAuth[Supabase Authentication]
NextJS --> SupabaseDB[Supabase PostgreSQL Database]

NextJS --> Vercel[Vercel Hosting & Deployment]

SupabaseAuth --> SupabaseDB

Flow Summary

Users access the application through their web browser.

The Next.js frontend handles UI rendering and user interactions.

Supabase Authentication manages user login and session security.

Supabase PostgreSQL stores project and task data.

Vercel handles hosting, deployment, and serverless infrastructure.

This architecture allows me to scale TaskNova efficiently while maintaining a fast development workflow through serverless infrastructure.

---

## Development Status

TaskNova is currently under **active development**.

Core systems such as authentication, project management workflows, and dashboard functionality are being rebuilt and refined as the architecture matures.

This iterative process allows the project to grow toward one of two long-term goals:

* A fully realized SaaS platform for project management
* A foundation for a modern web design and development studio focused on building future-ready applications

---

## Roadmap

Planned areas of continued development include:

* Rebuilding authentication and onboarding flows
* Expanded project and task management tools
* Improved dashboard UX
* Enhanced visual design and motion systems
* Scalable architecture for SaaS growth

---

## License and Usage

© 2026 Douglas Moth — TaskNova
All rights reserved.

This codebase is proprietary and may not be used, copied, modified, or distributed without explicit written permission from the author.
