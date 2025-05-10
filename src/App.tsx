import { useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import KeyBenefits from './components/KeyBenefits';
import Differentiator from './components/Differentiator';
import HowItWorks from './components/HowItWorks';
import SocialProof from './components/SocialProof';
import CallToAction from './components/CallToAction';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  // Update document title
  useEffect(() => {
    document.title = 'SmartFinance | All-in-One Microfinance Software Solution';
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <KeyBenefits />
      <Differentiator />
      <HowItWorks />
      <Pricing />
      <SocialProof />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;