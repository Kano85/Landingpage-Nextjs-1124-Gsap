import AnimatedBox from '../components/AnimatedBox';
import logger from '../../../lib/logger';

export default function Home() {
  // Log the page load event (for SSR or initial client-side load)
  logger.info('Home page loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AnimatedBox />
    </div>
  );
}
