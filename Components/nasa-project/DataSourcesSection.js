
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Satellite, 
  Thermometer, 
  Droplets, 
  TreePine,
  Shield,
  Zap,
  Globe,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function DataSourcesSection() {
  const [activeTab, setActiveTab] = useState('all');

  const dataSources = [
    {
      category: 'climate',
      icon: Thermometer,
      title: "Urban Heat Island Mapping",
      satellite: "MODIS Terra/Aqua",
      description: "High-resolution thermal data identifying heat patterns across urban areas to optimize cooling strategies.",
      metrics: ["Temperature variance", "Heat intensity", "Cooling zones"],
      status: "Real-time",
      color: "from-red-500 to-orange-500"
    },
    {
      category: 'water',
      icon: Droplets,
      title: "Water Quality & Availability",
      satellite: "Landsat 8/9",
      description: "Spectral analysis of water bodies monitoring pollution levels, algae growth, and resource availability.",
      metrics: ["Water clarity", "Contamination levels", "Supply trends"],
      status: "Weekly updates",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: 'vegetation',
      icon: TreePine,
      title: "Green Cover Analysis",
      satellite: "Sentinel-2",
      description: "Vegetation health monitoring and urban forest mapping for sustainable green infrastructure planning.",
      metrics: ["Canopy coverage", "Tree health", "Growth patterns"],
      status: "Monthly analysis",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: 'disaster',
      icon: Shield,
      title: "Flood Risk Assessment",
      satellite: "SMAP",
      description: "Soil moisture and precipitation data combined with topography for flood prediction and prevention.",
      metrics: ["Risk zones", "Water levels", "Emergency alerts"],
      status: "Daily monitoring",
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: 'air',
      icon: Zap,
      title: "Air Quality Monitoring",
      satellite: "TROPOMI/Sentinel-5P",
      description: "Atmospheric composition analysis tracking pollutants and greenhouse gas concentrations.",
      metrics: ["NO2 levels", "PM2.5 concentration", "Ozone tracking"],
      status: "Hourly data",
      color: "from-yellow-500 to-amber-500"
    },
    {
      category: 'land',
      icon: Globe,
      title: "Land Use Classification",
      satellite: "Multiple sources",
      description: "Comprehensive land use mapping combining multiple datasets for optimal urban development planning.",
      metrics: ["Development density", "Land classification", "Change detection"],
      status: "Quarterly reports",
      color: "from-gray-500 to-slate-500"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Sources' },
    { id: 'climate', label: 'Climate' },
    { id: 'water', label: 'Water' },
    { id: 'vegetation', label: 'Vegetation' },
    { id: 'disaster', label: 'Disaster Risk' },
    { id: 'air', label: 'Air Quality' },
    { id: 'land', label: 'Land Use' }
  ];

  const filteredData = activeTab === 'all' 
    ? dataSources 
    : dataSources.filter(item => item.category === activeTab);

  return (
    <section id="data-sources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            <Satellite className="w-4 h-4" />
            NASA Earth Science Data
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Cutting-Edge Data Sources
            <span className="block text-emerald-600">Powering Smart Decisions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leveraging NASA's most advanced Earth observation satellites and sensors to provide 
            comprehensive, real-time insights for sustainable urban development.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeTab === category.id ? "default" : "outline"}
              onClick={() => setActiveTab(category.id)}
              className={`rounded-full px-6 py-2 transition-all duration-300 ${
                activeTab === category.id 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'hover:bg-blue-50 hover:border-blue-300'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Data Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredData.map((source, index) => (
              <motion.div
                key={source.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 bg-gradient-to-br ${source.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <source.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {source.status}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {source.title}
                    </CardTitle>
                    
                    <div className="text-sm text-blue-600 font-medium mb-3">
                      📡 {source.satellite}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {source.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-sm font-semibold text-gray-700 mb-2">Key Metrics:</div>
                      <div className="flex flex-wrap gap-2">
                        {source.metrics.map((metric) => (
                          <Badge key={metric} variant="secondary" className="text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {source.category === 'air' ? (
                      <Link to={createPageUrl("AirQuality")}>
                        <Button variant="outline" size="sm" className="group/btn">
                          View Live Data
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    ) : (
                      <Button variant="outline" size="sm" className="group/btn">
                        View Live Data
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-900 to-emerald-900 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Experience Live Satellite Data
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our interactive dashboard showing real-time NASA Earth observation data 
            for participating cities worldwide.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4">
            <Globe className="w-5 h-5 mr-2" />
            Launch Interactive Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}