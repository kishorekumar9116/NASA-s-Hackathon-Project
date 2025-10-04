import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  MessageCircle, 
  MapPin, 
  Send,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Heart
} from "lucide-react";
import { motion } from "framer-motion";

export default function CommunitySection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        category: '',
        location: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const engagementOptions = [
    {
      icon: MessageCircle,
      title: "Community Feedback",
      description: "Share your observations about local environmental issues, air quality concerns, or flooding hotspots.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Location-Specific Issues",
      description: "Report specific areas needing attention for green spaces, infrastructure, or environmental improvements.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Lightbulb,
      title: "Ideas & Suggestions",
      description: "Propose innovative solutions or share ideas for sustainable urban development in your neighborhood.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Heart,
      title: "Volunteer Opportunities",
      description: "Get involved in community projects, citizen science initiatives, or environmental monitoring programs.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const impactStories = [
    {
      location: "Downtown District",
      issue: "Urban Heat Islands",
      solution: "Strategic tree planting based on satellite temperature data",
      impact: "8°F temperature reduction during peak summer"
    },
    {
      location: "Riverside Community",
      issue: "Flooding Risk",
      solution: "Improved drainage system using flood prediction models",
      impact: "90% reduction in flood damage incidents"
    },
    {
      location: "Industrial Zone",
      issue: "Air Quality Concerns",
      solution: "Traffic flow optimization and emission monitoring",
      impact: "25% improvement in air quality index"
    }
  ];

  return (
    <section id="community" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            Community Involvement
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Voice Matters
            <span className="block text-green-600">Join the Conversation</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Help us build a smarter, more sustainable city by sharing your insights, 
            reporting local environmental issues, and participating in community-driven solutions.
          </p>
        </motion.div>

        {/* Engagement Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {engagementOptions.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 bg-white group hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  Share Your Feedback
                </CardTitle>
                <p className="text-gray-600">
                  Help us identify environmental issues and improvement opportunities in your area.
                </p>
              </CardHeader>
              <CardContent>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <Input
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Issue Category
                      </label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="air-quality">Air Quality</SelectItem>
                          <SelectItem value="green-space">Green Space</SelectItem>
                          <SelectItem value="flooding">Flooding</SelectItem>
                          <SelectItem value="heat">Urban Heat</SelectItem>
                          <SelectItem value="traffic">Traffic/Transport</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location/Area
                      </label>
                      <Input
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        placeholder="Specific address or neighborhood"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Feedback
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Describe the issue, suggestion, or observation in detail..."
                        className="h-32"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Feedback
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      Your feedback has been submitted successfully. We'll review it and incorporate your insights into our planning process.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Impact Stories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community Impact Stories
              </h3>
              <p className="text-gray-600">
                See how resident feedback has led to real improvements in our communities.
              </p>
            </div>

            <div className="space-y-4">
              {impactStories.map((story, index) => (
                <motion.div
                  key={story.location}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-l-4 border-l-green-500 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-gray-900">{story.location}</h4>
                        <MapPin className="w-4 h-4 text-gray-400" />
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">Issue:</span>
                          <span className="text-gray-600">{story.issue}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">Solution:</span>
                          <span className="text-gray-600">{story.solution}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="font-medium">Impact:</span>
                          <span className="text-green-600 font-medium">{story.impact}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 border-0">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Join Our Community Network
                </h4>
                <p className="text-gray-600 mb-4">
                  Connect with other residents working together for a sustainable future.
                </p>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}