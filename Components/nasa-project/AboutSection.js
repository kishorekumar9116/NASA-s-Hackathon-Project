import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Satellite, 
  TreePine, 
  Droplets, 
  Thermometer, 
  Shield,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const features = [
    {
      icon: Thermometer,
      title: "Air Quality Monitoring",
      description: "Real-time atmospheric data to track pollution levels and improve public health outcomes."
    },
    {
      icon: Droplets,
      title: "Water Resources Management",
      description: "Satellite imagery to monitor water quality, availability, and sustainable usage patterns."
    },
    {
      icon: TreePine,
      title: "Green Cover Analysis",
      description: "Vegetation mapping to optimize urban forests and green infrastructure development."
    },
    {
      icon: Shield,
      title: "Climate Resilience",
      description: "Urban heat island detection and flood risk assessment for disaster preparedness."
    },
    {
      icon: BarChart3,
      title: "Infrastructure Planning",
      description: "Data-driven insights for smart transportation and sustainable development projects."
    },
    {
      icon: Satellite,
      title: "Land Use Optimization",
      description: "Comprehensive land use analysis to balance growth with environmental conservation."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
            <Satellite className="w-4 h-4" />
            Project Overview
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Urban Planning with
            <span className="block text-blue-600">NASA Earth Science Data</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our innovative project leverages cutting-edge NASA Earth observation satellites and AI-powered analytics 
            to revolutionize how cities grow sustainably. By combining real-time environmental data with urban planning expertise, 
            we're creating smarter, greener communities that prioritize both human welfare and environmental stewardship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-blue-100 font-medium">Satellite Data Sources</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-blue-100 font-medium">Cities Participating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1M+</div>
              <div className="text-blue-100 font-medium">Citizens Impacted</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}