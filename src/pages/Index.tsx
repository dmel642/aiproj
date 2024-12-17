import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import CoreComponents from "../components/CoreComponents";

const Index = () => {
  return (
    <div className="min-h-screen bg-morphis-dark">
      <Navbar />
      <Hero />
      <IntroSection />
      <CoreComponents />
    </div>
  );
};

export default Index;