import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Info } from "lucide-react";
import { getAqiInfo } from "./data";

export default function AboutAqi() {
  const aqiLevels = [
    { range: "0-50", aqi: 25 },
    { range: "51-100", aqi: 75 },
    { range: "101-150", aqi: 125 },
    { range: "151-200", aqi: 175 },
    { range: "201-300", aqi: 250 },
    { range: "301+", aqi: 350 },
  ];

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-600" />
          About the Air Quality Index (AQI)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-gray-600">
          The AQI is an index for reporting daily air quality. It tells you how clean or
          polluted your air is, and what associated health effects might be a concern for
          you. The AQI focuses on health effects you may experience within a few hours or
          days after breathing polluted air.
        </p>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2 font-semibold">AQI Range</th>
                <th className="p-2 font-semibold">Level of Health Concern</th>
                <th className="p-2 font-semibold">Color</th>
              </tr>
            </thead>
            <tbody>
              {aqiLevels.map(({ range, aqi }) => {
                const { level, color } = getAqiInfo(aqi);
                return (
                  <tr key={range} className="border-b last:border-b-0">
                    <td className="p-3 font-mono">{range}</td>
                    <td className="p-3 font-medium" style={{ color: color }}>{level}</td>
                    <td className="p-3">
                      <Badge style={{ backgroundColor: color, color: 'white' }} className="font-semibold">{level}</Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}