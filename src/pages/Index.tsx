import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import CoreComponents from "../components/CoreComponents";
import LifecycleSection from "../components/LifecycleSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-morphis-dark">
      <Navbar />
      <Hero />
      <IntroSection />
      <CoreComponents />
      <LifecycleSection />
      <Footer />
    </div>
  );
};

export default Index;