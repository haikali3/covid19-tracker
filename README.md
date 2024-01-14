# Covid-19 Tracker

Visit the live application: [Covid-19 Tracker](https://covid19-tracker-opal.vercel.app/)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Data Source](#data-source)
- [Quizzes](#quizzes)

## Features

- **Worldwide cases**: Visit the website to access real-time COVID-19 statistics.
- **Country Specific Data**: Stay informed with specific country data about COVID-19.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or higher)
- [npm](https://www.npmjs.com/) (v6.0.0 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <this repository>

2. **Install dependencies:**

   ```bash
   npm install

3. **Run the development server:**

    ```bash
    npm run dev

The application will be accessible at http://localhost:3000/.

Deployment
The project is deployed on Vercel. Any changes pushed to the main branch will trigger an automatic deployment.

Visit the live application: [Covid-19 Tracker](https://covid19-tracker-opal.vercel.app/)

## Technologies Used
- [ReactJS](https://react.dev/) - Javascript Framework
- [NextJS](https://nextjs.org/) - React Framework
- [Vercel](https://vercel.com/dashboard) - Deployment Platform
- [TailwindCSS](https://tailwindcss.com/docs/installation) - Deployment Platform

## Data Source
- [disease.sh](https://disease.sh/docs/) - Open API for disease-related statistics

## Quizzes
**1.What is the difference between Client Side Rendering and Server Side Rendering?**

Client Side Rendering (CSR) and Server Side Rendering (SSR) are two approaches in web development. In CSR, the browser loads a minimal HTML page and fetches JavaScript, which then renders the content. This leads to faster initial page loads but delays rendering until client-side processing. In SSR, the server sends fully-rendered HTML to the browser, providing a faster initial rendering but potentially slower page loads due to larger initial payloads.


**2.Explain and justify the technology stack, libraries, router framework, ui component framework you choose.**
a.Non-exhaustive, pick any notable item and explain

Tailwind CSS was selected for its utility-first approach, promoting rapid development and easy customization. Its simplicity and flexibility allow developers to create a cohesive and responsive UI with minimal effort.


**3.Provides points of improvement, or feedback for this "Task (Assessment) Requirement".**

If testing is a bonus, provide guidelines on what aspects to test (e.g., functionality, API calls, UI interactions). Offer resources or suggestions for implementing testing frameworks compatible with the chosen technology stack.

