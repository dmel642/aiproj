import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-morphis-navy/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/5400ecfa-f945-4ef9-9d0d-aa2ce6fcc62d.png" alt="Morphis" className="h-10 w-10" />
            <span className="text-morphis-silver font-bold text-xl">Morphis</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <a 
              href="https://x.com/MorphisProject" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-morphis-silver hover:text-morphis-blue transition-colors flex items-center"
            >
              X <ExternalLink className="ml-1 h-4 w-4" />
            </a>
            
            <a 
              href="https://morphis.gitbook.io/morphis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-morphis-silver hover:text-morphis-blue transition-colors flex items-center"
            >
              Docs <ExternalLink className="ml-1 h-4 w-4" />
            </a>
            
            <Link 
              to="/projects"
              className="text-morphis-silver hover:text-morphis-blue transition-colors"
            >
              Projects
            </Link>
            
            <a 
              href="https://pump.fun/coin/insertcoin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-morphis-blue text-morphis-navy px-4 py-2 rounded-lg hover:bg-morphis-pink transition-colors flex items-center"
            >
              $MORPHIS <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;