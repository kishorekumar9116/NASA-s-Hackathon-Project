import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Leaf, 
  TrendingUp, 
  Target,
  Users,
  ShieldCheck
} from "lucide-react";
import { motion } from "framer-motion";

export default function ImpactSection() {
  const impacts = [
    {
      category: "Quality of Life",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      improvements: [
        { metric: "Air Quality Index", improvement: "32% better", description: "Reduced pollution through optimized traffic flows" },
        { metric: "Green Space Access", improvement: "45% increase", description: "Strategic park placement based on population density" },
        { metric: "Heat Exposure", improvement: "28% reduction", description: "Urban cooling zones in high-temperature areas" }
      ]
    },
    {
      category: "Environmental Protection",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
      improvements: [
        { metric: "Urban Forest Coverage", improvement: "+15%", description: "Data-driven tree planting initiatives" },
        { metric: "Water Conservation", improvement: "22% saved", description: "Smart irrigation and leak detection systems" },
        { metric: "Carbon Footprint", improvement: "-18%", description: "Efficient transportation and energy planning" }
      ]
    },
    {
      category: "Economic Growth",
      icon: TrendingUp,
      color: "from-blue-500 to-indigo-500",
      improvements: [
        { metric: "Infrastructure Efficiency", improvement: "38% boost", description: "Optimized resource allocation and maintenance" },
        { metric: "Property Values", improvement: "+12%", description: "Sustainable neighborhoods attract premium investment" },
        { metric: "Energy Costs", improvement: "25% reduction", description: "Smart grid and renewable energy integration" }
      ]
    },
    {
      category: "Climate Resilience",
      icon: ShieldCheck,
      color: "from-purple-500 to-violet-500",
      improvements: [
        { metric: "Flood Risk", improvement: "40% lower", description: "Predictive modeling and prevention infrastructure" },
        { metric: "Emergency Response", improvement: "60% faster", description: "Real-time disaster monitoring and alerts" },
        { metric: "Adaptation Planning", improvement: "100% coverage", description: "Comprehensive climate change preparation" }
      ]
    }
  ];

  const communityBenefits = [
    {
      icon: Users,
      title: "Community Health",
      stat: "85%",
      description: "of residents report improved well-being"
    },
    {
      icon: Target,
      title: "Planning Accuracy",
      stat: "92%",
      description: "success rate in project outcomes"
    },
    {
      icon: Leaf,
      title: "Sustainability Goals",
      stat: "78%",
      description: "progress toward carbon neutrality"
    }
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Measurable Impact
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Communities
            <span className="block text-purple-600">Through Data-Driven Solutions</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how NASA Earth Science data is creating tangible improvements in urban environments, 
            enhancing both human welfare and environmental sustainability across participating cities.
          </p>
        </motion.div>

        {/* Impact Categories */}
        <div className="space-y-12 mb-20">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.category}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Category Header */}
                    <div className={`bg-gradient-to-br ${impact.color} p-8 text-white flex flex-col justify-center`}>
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                        <impact.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{impact.category}</h3>
                      <p className="text-white/90">Measurable improvements across key metrics</p>
                    </div>
                    
                    {/* Metrics */}
                    <div className="lg:col-span-2 p-8 bg-white">
                      <div className="space-y-6">
                        {impact.improvements.map((item, itemIndex) => (
                          <motion.div
                            key={item.metric}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                          >
                            <div className="flex-1">
                              <div className="font-semibold text-gray-900 mb-1">{item.metric}</div>
                              <div className="text-sm text-gray-600">{item.description}</div>
                            </div>
                            <div className="text-2xl font-bold text-green-600 ml-4">
                              {item.improvement}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Community Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Community-Wide Benefits
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Our data-driven approach delivers measurable improvements that directly benefit residents and the environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{benefit.stat}</div>
                <div className="text-lg font-semibold text-white mb-2">{benefit.title}</div>
                <div className="text-blue-100">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}