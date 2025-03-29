
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Sample portfolio projects
const portfolioItems = [
  {
    id: 1,
    title: "Ethereal Dreams",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1585639270292-cb5198b3e8c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    videoUrl: "https://player.vimeo.com/video/459793290",
    client: "LuxBrand",
  },
  {
    id: 2,
    title: "Urban Rhythms",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1605703485362-1eb57cafde41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    videoUrl: "https://player.vimeo.com/video/551731293",
    client: "CityBeat Productions",
  },
  {
    id: 3,
    title: "Coastal Serenity",
    category: "Short Film",
    thumbnail: "https://images.unsplash.com/photo-1632013526842-ddc5be755f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    videoUrl: "https://player.vimeo.com/video/290198957",
    client: "OceanView Studios",
  },
  {
    id: 4,
    title: "Momentum Drive",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1613471167262-6749f99757b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    videoUrl: "https://player.vimeo.com/video/573702756",
    client: "SpeedTech Motors",
  },
  {
    id: 5,
    title: "Mountain Ascent",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1682695795255-b236b1f1267d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    videoUrl: "https://player.vimeo.com/video/179359599",
    client: "Summit Productions",
  },
  {
    id: 6,
    title: "Neon Nights",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1514533212735-5df27d970db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    videoUrl: "https://player.vimeo.com/video/369661745",
    client: "Electro Records",
  },
];

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  
  const categories = ["all", ...Array.from(new Set(portfolioItems.map(item => item.category.toLowerCase())))];
  
  const filteredItems = selectedFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.toLowerCase() === selectedFilter);

  return (
    <section id="work" className="py-20 bg-studio-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="title-lg mb-6">Our <span className="text-studio-amber">Work</span></h2>
          <p className="text-xl text-studio-white/70 max-w-2xl mx-auto">
            Immersive storytelling through the lens of innovation and creativity.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedFilter === category 
                  ? "bg-studio-amber text-studio-black" 
                  : "bg-studio-darkGray text-studio-white/70 hover:bg-studio-gray"
              }`}
              onClick={() => setSelectedFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer h-[300px] animate-zoom-in"
              onClick={() => setSelectedVideo(item.videoUrl)}
            >
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-studio-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-studio-amber text-sm font-medium mb-2">{item.category}</span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-studio-amber transition-colors">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.client}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-studio-amber rounded-full p-4 text-studio-black">
                  <Play size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="sm:max-w-[900px] p-0 bg-studio-black border-studio-gray">
          <div className="aspect-video w-full">
            {selectedVideo && (
              <iframe
                src={`${selectedVideo}?autoplay=1`}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Project Video"
              ></iframe>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
