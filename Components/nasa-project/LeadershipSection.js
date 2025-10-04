import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  TreePine, 
  Calendar,
  CheckCircle,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";

export default function LeadershipSection() {
  const stakeholders = [
    {
      icon: Building2,
      title: "City Planning Department",
      role: "Strategic Development",
      responsibilities: ["Urban growth planning", "Zoning optimization", "Infrastructure coordination"],
      involvement: "Primary decision-makers integrating NASA data into comprehensive city plans."
    },
    {
      icon: TreePine,
      title: "Parks & Recreation",
      role: "Environmental Stewardship",
      responsibilities: ["Green space management", "Urban forest expansion", "Recreation facility planning"],
      involvement: "Utilizing vegetation data to enhance urban green infrastructure and biodiversity."
    },
    {
      icon: Users,
      title: "Public Health Department",
      role: "Community Wellness",
      responsibilities: ["Air quality monitoring", "Health impact assessment", "Environmental health policies"],
      involvement: "Leveraging environmental data to protect and improve community health outcomes."
    }
  ];

  const timelineSteps = [
    {
      phase: "Data Collection",
      duration: "Q1 2024",
      status: "completed",
      description: "Gather and process NASA satellite data for comprehensive city analysis.",
      activities: ["Satellite data acquisition", "Data processing & validation", "Baseline measurements"]
    },
    {
      phase: "Analysis & Planning",
      duration: "Q2 2024",
      status: "completed",
      description: "Analyze data patterns and develop strategic urban development recommendations.",
      activities: ["Pattern analysis", "Risk assessment", "Strategic planning sessions"]
    },
    {
      phase: "Policy Integration",
      duration: "Q3 2024",
      status: "active",
      description: "Integrate findings into official city policies and development guidelines.",
      activities: ["Policy drafting", "Stakeholder reviews", "Regulatory approvals"]
    },
    {
      phase: "Implementation",
      duration: "Q4 2024",
      status: "upcoming",
      description: "Begin executing data-driven urban development projects and initiatives.",
      activities: ["Project launches", "Construction begins", "Community programs start"]
    },
    {
      phase: "Monitoring & Evaluation",
      duration: "2025+",
      status: "upcoming",
      description: "Continuous monitoring of outcomes and adaptive management approaches.",
      activities: ["Progress tracking", "Impact assessment", "Plan adjustments"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'active': return 'bg-blue-500';
      case 'upcoming': return 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed': return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'active': return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case 'upcoming': return <Badge className="bg-gray-100 text-gray-800">Upcoming</Badge>;
      default: return <Badge variant="outline">Planned</Badge>;
    }
  };

  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            City Leadership & Governance
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Collaborative Decision Making
            <span className="block text-indigo-600">For Sustainable Growth</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our project brings together key city departments and stakeholders to ensure 
            NASA Earth Science data is effectively integrated into governance and policy-making processes.
          </p>
        </motion.div>

        {/* Stakeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={stakeholder.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 group hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stakeholder.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {stakeholder.title}
                  </h3>
                  
                  <div className="text-sm font-semibold text-indigo-600 mb-4">
                    {stakeholder.role}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {stakeholder.involvement}
                  </p>
                  
                  <div>
                    <div className="text-sm font-semibold text-gray-700 mb-3">Key Responsibilities:</div>
                    <ul className="space-y-2">
                      {stakeholder.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Implementation Timeline
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to integrating NASA data into city governance and policy-making.
            </p>
          </div>

          <div className="space-y-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex items-start">
                  {/* Timeline dot */}
                  <div className="flex flex-col items-center mr-8">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(step.status)}`}></div>
                    {index < timelineSteps.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-200 mt-4"></div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{step.phase}</h4>
                          <div className="flex items-center gap-2 mb-3">
                            <Calendar className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{step.duration}</span>
                          </div>
                        </div>
                        {getStatusBadge(step.status)}
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {step.activities.map((activity, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}