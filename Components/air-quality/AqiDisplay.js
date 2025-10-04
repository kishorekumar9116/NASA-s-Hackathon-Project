import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { getAqiInfo } from "./data";

export default function AqiDisplay({ aqi, level }) {
  const aqiInfo = getAqiInfo(aqi);

  return (
    <Card className={`border-0 shadow-lg bg-gradient-to-br ${aqiInfo.gradient}`}>
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-white">
          <div className="text-center md:text-left">
            <div className="text-sm font-medium opacity-80 mb-2">CURRENT AIR QUALITY INDEX (AQI)</div>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="text-7xl md:text-8xl font-bold"
            >
              {aqi}
            </motion.div>
          </div>
          <div className="text-center md:text-right max-w-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold mb-3 flex items-center justify-center md:justify-end gap-3"
            >
              <aqiInfo.icon className="w-10 h-10" />
              {aqiInfo.level}
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="leading-relaxed opacity-90"
            >
              {aqiInfo.message}
            </motion.p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}