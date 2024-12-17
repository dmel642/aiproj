import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import IntroSection from "../components/IntroSection";
import CoreComponents from "../components/CoreComponents";
import VideoSection from "../components/VideoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-morphis-dark">
      <Navbar />
      <Hero />
      <IntroSection />
      <CoreComponents />
      <VideoSection />
    </div>
  );
};

export default Index;