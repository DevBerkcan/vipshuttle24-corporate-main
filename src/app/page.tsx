import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Fleet />
      <Gallery />
      <Booking />
      <Footer />
    </main>
  );
}