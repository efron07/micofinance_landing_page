import { useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import KeyBenefits from './components/KeyBenefits';
import Differentiator from './components/Differentiator';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  // Update document title
  useEffect(() => {
    document.title = 'SmartFinance | All-in-One Microfinance Software Solution';
  }, []);

  return (
    <div className="font-sans">
      <Hero />
      <ProblemSolution />
      <KeyBenefits />
      <Differentiator />
      <HowItWorks />
      <SocialProof />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;