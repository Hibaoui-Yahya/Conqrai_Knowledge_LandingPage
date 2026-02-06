import { useState } from 'react';
import { HeroSection } from './components/blocks/hero-section-1';
import ProblemStory from './components/ProblemStory';
import HowItWorks from './components/HowItWorks';
import ProductVision from './components/FailureStory';
import CoreCapabilities from './components/SecuritySection';
import WhoItsFor from './components/Logos';
import Comparison from './components/Comparison';
import TrustSignals from './components/Impact';
import FinalCTA from './components/ContactForm';
import Footer4Col from './components/ui/footer-column';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfUse from './components/TermsOfUse';

function App() {
  const [activePage, setActivePage] = useState<string | null>(null);

  const handleOpenPage = (page: string) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-[#0b0f14]">
      <HeroSection />
      <main>
        <ProblemStory />
        <HowItWorks />
        <ProductVision />
        <CoreCapabilities />
        <WhoItsFor />
        <Comparison />
        <TrustSignals />
        <FinalCTA />
      </main>
      <Footer4Col onOpenPage={handleOpenPage} />

      {activePage === 'Privacy Policy' && (
        <PrivacyPolicy onClose={() => setActivePage(null)} />
      )}
      {activePage === 'Terms of Use' && (
        <TermsOfUse onClose={() => setActivePage(null)} />
      )}
    </div>
  );
}

export default App;
