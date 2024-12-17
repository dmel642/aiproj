import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(2, 12, 27, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#64FFDA';
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-morphis-dark overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          <img 
            src="/lovable-uploads/4e38ca8b-c6ce-49bc-a683-afe9c6e9831b.png" 
            alt="Morphis Logo" 
            className="w-32 h-32 mb-8 animate-float"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-morphis-silver mb-6">
            Welcome to <span className="text-morphis-blue">Morphis</span>
          </h1>
          <p className="text-xl md:text-2xl text-morphis-silver/80 max-w-3xl mb-12">
            The next frontier in artificial intelligence—an AI entity with the unprecedented ability to build, refine, and evolve itself autonomously.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <FeatureCard 
              title="Self-Analysis"
              description="Continuously monitors processes, identifying inefficiencies and opportunities"
            />
            <FeatureCard 
              title="Self-Design"
              description="Designs and tests new modules to upgrade itself in real-time"
            />
            <FeatureCard 
              title="Self-Evolution"
              description="Grows smarter through iteration and experimentation"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-morphis-navy/50 backdrop-blur-sm p-6 rounded-lg border border-morphis-blue/20 hover:border-morphis-blue transition-colors group">
    <h3 className="text-morphis-blue text-xl font-semibold mb-3 group-hover:text-morphis-pink transition-colors">
      {title}
    </h3>
    <p className="text-morphis-silver/70">
      {description}
    </p>
  </div>
);

export default Hero;