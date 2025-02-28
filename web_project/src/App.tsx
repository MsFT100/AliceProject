import { FC } from 'react';
import Hero from './pages/hero';
import NavBar from './components/nav_bar/nav_bar';
import Services from './pages/services';
import Footer from './components/footer/footer';
import AboutSection from './components/about/about_section';
import TestimonialsSection from './components/reviews_and_testimonies_section/testimonials_section';
import CallToAction from './components/call_to_action';
import BlogSection from './components/blog/blog_section';

// Import other components

const App: FC = () => {
  return (
    <div className="font-sans">
      <NavBar />
      <main className="grow">
        <Hero />
        
        <AboutSection/>
        <Services />
        <TestimonialsSection />
        <BlogSection />
        <CallToAction />
        {/* Add other sections */}
      </main>
      <Footer />
    </div>
  );
};

export default App;