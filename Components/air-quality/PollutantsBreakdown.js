import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { getAqiInfo } from "./data";

export default function PollutantsBreakdown({ pollutants }) {
  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Pollutants Breakdown</CardTitle>
        <p className="text-gray-500 text-sm">Main contributors to the current AQI.</p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {pollutants.map((pollutant, index) => {
            const aqiInfo = getAqiInfo(pollutant.aqi);
            return (
              <motion.div
                key={pollutant.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className={`border-l-4 ${aqiInfo.borderColor} bg-gray-50`}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg">{pollutant.name}</h4>
                        <Badge variant="outline" className={`font-mono text-xs ${aqiInfo.textColor} ${aqiInfo.bgColor} ${aqiInfo.borderColor}`}>{pollutant.aqi} AQI</Badge>
                    </div>
                    <div className="font-semibold text-2xl text-gray-800">{pollutant.value} <span className="text-sm text-gray-500">{pollutant.unit}</span></div>
                    <div className="text-xs text-gray-500 mt-1">{pollutant.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}