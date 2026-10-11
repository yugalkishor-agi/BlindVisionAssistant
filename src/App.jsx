import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TechStack from './components/TechStack';
import Team from './components/Team';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <TechStack />
        <Team />
      </main>
    </>
  );
}
