import AnimatedBox from '../components/AnimatedBox';
import logger from '../lib/logger';

export default function AnimatedPage() {
  // Log the page load event (for SSR or initial client-side load)
  logger.info('Animated page loaded');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <AnimatedBox />
    </div>
  );
}
