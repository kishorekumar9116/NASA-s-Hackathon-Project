import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList
} from "recharts";
import { getAqiInfo } from "./data";
import { Calendar } from "lucide-react";

export default function ForecastChart({ forecast }) {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const aqiInfo = getAqiInfo(data.aqi);
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-bold">{label}</p>
          <p style={{ color: aqiInfo.color }}>AQI: {data.aqi}</p>
          <p className="text-sm text-gray-600">{aqiInfo.level}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            5-Day AQI Forecast
        </CardTitle>
        <p className="text-gray-500 text-sm">Predicted air quality for the upcoming days.</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={forecast} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(230, 230, 230, 0.5)'}} />
            <Bar dataKey="aqi" radius={[4, 4, 0, 0]}>
              <LabelList dataKey="aqi" position="top" style={{fill: '#4A5568', fontSize: 12}} />
              {forecast.map((entry, index) => {
                const { color } = getAqiInfo(entry.aqi);
                return <Bar key={`cell-${index}`} fill={color} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}