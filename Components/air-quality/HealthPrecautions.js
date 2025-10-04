
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAqiInfo } from "./data";
import { Heart, Shield, Wind, Home, Activity } from "lucide-react";

const icons = {
    general: Heart,
    sensitive: Shield,
    outdoor: Wind,
    indoor: Home,
    exercise: Activity,
}

export default function HealthPrecautions({ level }) {
  const { healthPrecautions } = getAqiInfo(level.aqi);

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-500" />
          Health Precautions
        </CardTitle>
        <p className="text-gray-500 text-sm">Recommendations based on the current air quality.</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {Object.entries(healthPrecautions).map(([key, value]) => {
              const Icon = icons[key];
              return (
                <li key={key} className="flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
                  {Icon && <Icon className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />}
                  <div>
                    <h4 className="font-semibold capitalize text-gray-800">{key.replace('_', ' ')}</h4>
                    <p className="text-gray-600 text-sm">{value}</p>
                  </div>
                </li>
              )
            }
          )}
        </ul>
      </CardContent>
    </Card>
  );
}
