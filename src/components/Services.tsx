
import React from 'react';
import { Film, Tv, Camera, Mic, Edit, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Film size={36} className="text-studio-amber" />,
    title: "Film Production",
    description: "From concept to final delivery, we handle all aspects of the filmmaking process with meticulous attention to detail and creative excellence."
  },
  {
    icon: <Tv size={36} className="text-studio-amber" />,
    title: "Commercial Production",
    description: "Compelling commercial content that connects with your audience and drives engagement with your brand."
  },
  {
    icon: <Camera size={36} className="text-studio-amber" />,
    title: "Corporate Video",
    description: "Professional corporate videos that communicate your brand's message with clarity and impact."
  },
  {
    icon: <Mic size={36} className="text-studio-amber" />,
    title: "Sound Design",
    description: "Immersive audio experiences that enhance your visual content and create emotional connections."
  },
  {
    icon: <Edit size={36} className="text-studio-amber" />,
    title: "Post-Production",
    description: "Comprehensive editing, color grading, and visual effects to elevate your footage to the highest standards."
  },
  {
    icon: <PenTool size={36} className="text-studio-amber" />,
    title: "Creative Direction",
    description: "Strategic creative guidance to ensure your project achieves its artistic and communication goals."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-studio-darkGray clip-diagonal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="title-lg mb-6">Our <span className="text-studio-amber">Services</span></h2>
          <p className="text-xl text-studio-white/70 max-w-2xl mx-auto">
            Comprehensive video production services delivered with expertise and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-studio-black p-8 rounded-lg border border-studio-gray/20 hover:border-studio-amber/30 transition-all duration-300 hover:shadow-lg hover:shadow-studio-amber/5"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-studio-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
