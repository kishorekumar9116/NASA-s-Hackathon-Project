import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";

import AirQualityHeader from "../components/air-quality/AirQualityHeader";
import AqiDisplay from "../components/air-quality/AqiDisplay";
import PollutantsBreakdown from "../components/air-quality/PollutantsBreakdown";
import HealthPrecautions from "../components/air-quality/HealthPrecautions";
import ForecastChart from "../components/air-quality/ForecastChart";
import { airQualityData } from "../components/air-quality/data";
import AboutAqi from "../components/air-quality/AboutAqi";

export default function AirQualityPage() {
  const [selectedCity, setSelectedCity] = useState("New York");
  const [data, setData] = useState(airQualityData[selectedCity]);

  useEffect(() => {
    setData(airQualityData[selectedCity]);
  }, [selectedCity]);

  return (
    <div className="min-h-screen bg-gray-50">
      <AirQualityHeader
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        lastUpdated={data.lastUpdated}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <AqiDisplay aqi={data.aqi} level={data.level} />
            <PollutantsBreakdown pollutants={data.pollutants} />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <HealthPrecautions level={data.level} />
            <ForecastChart forecast={data.forecast} />
          </div>
        </motion.div>
        <div className="mt-8">
            <AboutAqi />
        </div>
      </main>
    </div>
  );
}