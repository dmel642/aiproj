import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import CoreComponents from "../components/CoreComponents";
import LifecycleSection from "../components/LifecycleSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-morphis-dark">
      <Navbar />
      <Hero />
      <IntroSection />
      <CoreComponents />
      <LifecycleSection />
    </div>
  );
};

export default Index;