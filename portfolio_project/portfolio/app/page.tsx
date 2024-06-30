import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
    return (
      <main>
        <section className="flex min-h-screen flex-col bg-primary">
          <Navbar />
          <div className="container mx-auto px-12 py-4 ">
          <HeroSection />
        </div>
        </section>
  
        
      </main>
    );
  }