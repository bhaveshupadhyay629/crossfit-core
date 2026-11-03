import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Classes } from './components/Classes';
import { Schedule } from './components/Schedule';
import { Trainers } from './components/Trainers';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    document.title = 'CrossFit Core';
  }, []);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen bg-(--bg) text-(--fg) font-sans selection:bg-(--accent) selection:text-white">
      <title>CrossFit Core</title>
      <Header onOpenBooking={handleOpenBooking} />
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <Classes />
        <Schedule onOpenBooking={handleOpenBooking} isOpen={isBookingOpen} onClose={handleCloseBooking} />
        <Trainers />
        <Pricing onOpenBooking={handleOpenBooking} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
