import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TechStack from './components/TechStack';
import JudgeConnect from './components/JudgeConnect';
import NeatLogs from './components/NeatLogs';
import Team from './components/Team';
import Sponsors from './components/Sponsors';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <TechStack />
        <JudgeConnect />
        <NeatLogs />
        <Team />
        <Sponsors />
      </main>
    </>
  );
}
