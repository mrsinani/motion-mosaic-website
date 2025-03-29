
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-studio-darkGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="title-lg mb-6">Get In <span className="text-studio-amber">Touch</span></h2>
          <p className="text-xl text-studio-white/70 max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us today to discuss your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-studio-black rounded-lg p-8 border border-studio-gray/20">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-studio-white/70 mb-2">
                      Name
                    </label>
                    <Input 
                      id="name"
                      className="bg-studio-darkGray border-studio-gray/30 focus:border-studio-amber text-studio-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-studio-white/70 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-studio-darkGray border-studio-gray/30 focus:border-studio-amber text-studio-white"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-studio-white/70 mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    className="bg-studio-darkGray border-studio-gray/30 focus:border-studio-amber text-studio-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-studio-white/70 mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    className="bg-studio-darkGray border-studio-gray/30 focus:border-studio-amber text-studio-white resize-none"
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-studio-amber text-studio-black hover:bg-studio-gold">
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-studio-amber/10 p-4 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-studio-amber" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Us</h4>
                  <p className="text-studio-white/70">info@motioncraft.com</p>
                  <p className="text-studio-white/70">projects@motioncraft.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-studio-amber/10 p-4 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-studio-amber" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Call Us</h4>
                  <p className="text-studio-white/70">+1 (555) 123-4567</p>
                  <p className="text-studio-white/70">+1 (555) 765-4321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-studio-amber/10 p-4 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-studio-amber" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Location</h4>
                  <p className="text-studio-white/70">
                    123 Cinema Street<br />
                    Los Angeles, CA 90028
                  </p>
                </div>
              </div>
            </div>
            
            {/* Google Maps Embed (Placeholder) */}
            <div className="mt-8 rounded-lg overflow-hidden h-64 bg-studio-gray/20 flex items-center justify-center">
              <div className="text-center p-4">
                <p className="text-studio-white/50">Google Maps would be embedded here</p>
                <p className="text-xs text-studio-white/30">In a real application, this would be an interactive map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
