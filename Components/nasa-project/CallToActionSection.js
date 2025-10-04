import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  ChevronRight, 
  Globe, 
  Satellite,
  TreePine,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

export default function CallToActionSection() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const actionItems = [
    {
      icon: Users,
      title: "Share Your Voice",
      description: "Contribute to community planning",
      action: () => scrollToSection('community')
    },
    {
      icon: Globe,
      title: "Explore Data",
      description: "View live satellite information",
      action: () => scrollToSection('data-sources')
    },
    {
      icon: TreePine,
      title: "Track Progress",
      description: "Monitor environmental improvements",
      action: () => scrollToSection('impact')
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/20 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
            <Satellite className="w-4 h-4" />
            Building Tomorrow's Cities Today
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Join Us in Building a
            <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Smarter, Greener City
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Together, we can create sustainable communities that protect our environment 
            while improving quality of life for everyone. Your participation makes a difference.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={() => scrollToSection('community')}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold group min-w-48"
            >
              Get Involved
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg font-semibold backdrop-blur-sm min-w-48"
            >
              <Heart className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Quick Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={item.action}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-100 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200 text-sm">Participating Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1M+</div>
              <div className="text-blue-200 text-sm">Citizens Engaged</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">15TB</div>
              <div className="text-blue-200 text-sm">NASA Data Processed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">85%</div>
              <div className="text-blue-200 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}