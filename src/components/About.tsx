import React from "react";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCheck } from "lucide-react";

const stats = [
  {
    icon: <Award className="w-8 h-8 text-studio-amber" />,
    value: "15+",
    label: "Industry Awards",
  },
  {
    icon: <Users className="w-8 h-8 text-studio-amber" />,
    value: "200+",
    label: "Happy Clients",
  },
  {
    icon: <Clock className="w-8 h-8 text-studio-amber" />,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: <CheckCheck className="w-8 h-8 text-studio-amber" />,
    value: "500+",
    label: "Projects Completed",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-studio-black relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="title-lg mb-6">
              About <span className="text-studio-amber">Us</span>
            </h2>
            <p className="text-xl mb-6 text-studio-white/90">
              We're not just a production company—we're storytellers, dreamers,
              and visual artists dedicated to bringing your vision to life.
            </p>
            <p className="mb-8 text-studio-white/70">
              Founded in 2013, MotionCraft has grown from a small team of
              passionate filmmakers to a full-service video production company.
              We combine technical expertise with creative vision to produce
              content that resonates with audiences and achieves your goals. Our
              team of directors, cinematographers, editors, and producers work
              collaboratively to ensure every project exceeds expectations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-studio-amber text-studio-black hover:bg-studio-gold"
              >
                Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-studio-amber text-studio-white hover:bg-studio-amber/20"
              >
                Our Process
              </Button>
            </div>
          </div>

          {/* About Image */}
          <div className="lg:pl-12">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3062545/pexels-photo-3062545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Video production team at work"
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-studio-amber rounded-lg"></div>
              <div className="absolute -top-6 -right-6 h-24 w-24 border-2 border-studio-amber rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-studio-darkGray border border-studio-gray/20 rounded-lg p-6 text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-studio-white mb-2">
                {stat.value}
              </div>
              <div className="text-studio-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
