const VideoSection = () => {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://streamable.com/l/9obhbq/mp4.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-morphis-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-morphis-silver mb-4">
            Revolutionizing the Future of AI
          </h2>
          <div className="w-24 h-1 bg-morphis-blue mx-auto rounded-full animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;