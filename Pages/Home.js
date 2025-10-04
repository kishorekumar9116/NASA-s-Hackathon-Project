import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Satellite, 
  TreePine, 
  Droplets, 
  Thermometer, 
  Shield,
  Users,
  Building2,
  Leaf,
  MapPin,
  ChevronRight,
  BarChart3,
  Globe,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X,
  CheckCircle,
  TrendingUp,
  Target,
  Heart
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import Header from "../components/nasa-project/Header";
import HeroSection from "../components/nasa-project/HeroSection";
import AboutSection from "../components/nasa-project/AboutSection";
import DataSourcesSection from "../components/nasa-project/DataSourcesSection";
import ImpactSection from "../components/nasa-project/ImpactSection";
import LeadershipSection from "../components/nasa-project/LeadershipSection";
import CommunitySection from "../components/nasa-project/CommunitySection";
import CallToActionSection from "../components/nasa-project/CallToActionSection";
import Footer from "../components/nasa-project/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <DataSourcesSection />
        <ImpactSection />
        <LeadershipSection />
        <CommunitySection />
        <CallToActionSection />
      </main>
      
      <Footer />
    </div>
  );
}