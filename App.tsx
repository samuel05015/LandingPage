import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { BlogSection } from './components/BlogSection';
import { Testimonials } from './components/Testimonials';
import { SocialHub } from './components/SocialHub';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-pink-100 selection:text-pink-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <BlogSection />
        <Testimonials />
        <SocialHub />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;