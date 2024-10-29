//tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{html,js}', // Include if you have HTML or JS files
    './src/**/*.{js,ts,jsx,tsx}', // Include if you have a src directory
    './stories/**/*.{js,ts,jsx,tsx}', // Include if using Storybook
    // Add any other directories where you use Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
