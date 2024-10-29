🌟 Portfolio Next.js GSAP Project
This portfolio project is built with Next.js, GSAP, and TypeScript, focusing on dynamic animations and responsive design.

🚀 Important Note on Routing
⚠️ Routing Approach:
This project uses the pages directory for routing instead of the newer app router. The pages routing system was chosen specifically to enable seamless page transitions. With Next.js, the app router currently lacks built-in support for page transitions, which limits animation options when navigating between pages. Using the pages router allows us to leverage GSAP animations to create fluid, visually appealing transitions as users explore different sections of the portfolio.

📚 Table of Contents
Project Setup
Available Scripts
Dependencies
Features
Folder Structure
Testing
Linting & Formatting
Contributing
License
🛠️ Project Setup
Clone the Repository:

git clone https://github.com/YOUR_USERNAME/portfolio-nextjs-1124-gsap.git
cd portfolio-nextjs-1124-gsap
Install Dependencies:

npm install
Run the Development Server:

npm run dev
The application should now be running on http://localhost:3000.

🎩 Available Scripts

Script Description
npm run dev 🧪 Start the development server
npm run build 🏗️ Compile the project for production
npm run start 🚀 Start the production server
npm run lint 🔍 Run ESLint for code linting
npm run test ✅ Run tests with Vitest

📦 Dependencies

Next.js: Core framework for building React applications.
GSAP: Animation library for handling smooth transitions and effects.
TypeScript: Strongly typed JavaScript, enhancing code reliability.
TailwindCSS: Utility-first CSS framework for responsive, customizable designs.
Clerk: Authentication service, providing multi-language support and localization.
Drizzle ORM: SQL ORM, providing type-safe query construction.
Zod: Schema validation library, simplifying input validation.
For a full list of dependencies, please check the package.json file.

✨ Features

Animated UI: Leveraging GSAP for animations across components.
Multilingual Support: Using next-intl to provide translations and localization.
Database Connectivity: PostgreSQL database integration via Drizzle ORM.
Customizable Forms: Form validation and management using react-hook-form and @hookform/resolvers.

📂 Folder Structure

portfolio-nextjs-1124-gsap/
├── /pages # Next.js pages for routing
├── /components # Reusable React components
├── /lib # Utilities and helpers
├── /public # Public assets like images and fonts
├── /styles # TailwindCSS configuration and custom CSS
└── /tests # Unit tests using Vitest and Testing Library
🧪 Testing
Testing Library: Test individual React components and DOM interactions.
Vitest: Run tests with the command npm run test.
Coverage: Check test coverage using vitest for comprehensive testing.
🔍 Linting & Formatting
ESLint: Configured for TypeScript, React, and Next.js.
bash
Copy code
npm run lint
Prettier: Formatting rules integrated with ESLint to maintain consistency.

🤝 Contributing

Fork the repository.
Clone the forked repository to your machine.
Create a new branch for your feature or bugfix.
Submit a pull request for review.

📜 License

This project is licensed under the MIT License.
