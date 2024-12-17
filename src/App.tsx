import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Forge from "./pages/Forge";
import { Toaster } from "@/components/ui/toaster";

function App() {
  console.log("App rendering, current path:", window.location.pathname);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/forge" element={<Forge />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;