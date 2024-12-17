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
            <img src="/lovable-uploads/5400ecfa-f945-4ef9-9d0d-aa2ce6fcc62d.png" alt="Morphis" className="h-8 w-8 md:h-10 md:w-10" />
            <span className="text-morphis-silver font-bold text-lg md:text-xl">Morphis</span>
          </Link>
          
          <div className="flex items-center gap-3 md:gap-8">
            <a 
              href="https://x.com/MorphisProject" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-morphis-silver hover:text-morphis-blue transition-colors flex items-center text-sm md:text-base"
            >
              X <ExternalLink className="ml-1 h-3 w-3 md:h-4 md:w-4" />
            </a>
            
            <a 
              href="https://morphis.gitbook.io/morphis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-morphis-silver hover:text-morphis-blue transition-colors flex items-center text-sm md:text-base"
            >
              Docs <ExternalLink className="ml-1 h-3 w-3 md:h-4 md:w-4" />
            </a>
            
            <Link 
              to="/projects"
              className="text-morphis-silver hover:text-morphis-blue transition-colors text-sm md:text-base"
            >
              Projects
            </Link>
            
            <a 
              href="https://pump.fun/coin/insertcoin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-morphis-blue text-morphis-navy px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:bg-morphis-pink transition-colors flex items-center text-sm md:text-base whitespace-nowrap"
            >
              $MORPHIS <ExternalLink className="ml-1 h-3 w-3 md:h-4 md:w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;