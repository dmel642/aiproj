import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-morphis-navy/90 text-morphis-silver py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold text-morphis-blue mb-4">Evolve with Morphis</h3>
            <p className="text-lg opacity-80">
              Pushing the boundaries of AI evolution through self-improving systems
            </p>
          </div>
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold text-morphis-blue mb-4">Join the Future</h3>
            <p className="text-lg opacity-80">
              Where machine learning meets evolutionary computing
            </p>
          </div>
        </div>
        
        <div className="border-t border-morphis-blue/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-60">
              © 2024 Morphis. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="https://github.com" 
                className="text-morphis-silver hover:text-morphis-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link 
                to="https://twitter.com" 
                className="text-morphis-silver hover:text-morphis-blue transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;