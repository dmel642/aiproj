import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-morphis-dark">
      <Navbar />
      <Hero />
      <IntroSection />
    </div>
  );
};

export default Index;