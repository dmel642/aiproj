import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Forge from "./pages/Forge";
import { Toaster } from "@/components/ui/toaster";

function App() {
  console.log("App rendering, current path:", window.location.pathname);
  console.log("Available routes: /, /projects, /forge");
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/forge" element={<Forge />} />
        <Route path="*" element={
          <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-2xl">Page not found</h1>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;