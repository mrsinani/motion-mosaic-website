
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg" // This will be a fallback image
        >
          <source
            src="https://player.vimeo.com/external/378665755.hd.mp4?s=80baed36a14053a73473a0c0fb1d07315c8fcb1e&profile_id=175&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="title-xl text-studio-white mb-4">
            Crafting <span className="text-studio-amber">Stories</span> That Move
          </h1>
          <p className="text-xl md:text-2xl text-studio-white/80 mb-8 animate-slide-up animate-delay-200">
            Award-winning video production studio creating cinematic content that captivates and inspires.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up animate-delay-300">
            <Button size="lg" className="bg-studio-amber text-studio-black hover:bg-studio-gold">
              View Our Work
            </Button>
            <Button size="lg" variant="outline" className="border-studio-amber text-studio-white hover:bg-studio-amber/20">
              Our Services
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#work" className="text-studio-white/80 hover:text-studio-amber">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
