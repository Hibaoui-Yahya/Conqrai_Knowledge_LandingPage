import { HeroSection } from './components/blocks/hero-section-1';
import ProblemStory from './components/ProblemStory';
import HowItWorks from './components/HowItWorks';
import FailureStory from './components/FailureStory';
import Comparison from './components/Comparison';
import Impact from './components/Impact';
import ContactForm from './components/ContactForm';
import Footer4Col from './components/ui/footer-column';
import Logos from './components/Logos';
import SecuritySection from './components/SecuritySection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <Logos />
      <main>
        <ProblemStory />
        <HowItWorks />
        <FailureStory />
        <Comparison />
        <SecuritySection />
        <Impact />
        <ContactForm />
      </main>

      <Footer4Col />
    </div>
  );
}

export default App;
