import { Smile, Frown, Meh, AlertTriangle, CloudOff, Skull } from "lucide-react";

export const getAqiInfo = (aqi) => {
  if (aqi <= 50) {
    return {
      level: "Good",
      color: "#00E400",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100",
      textColor: "text-green-800",
      borderColor: "border-green-300",
      icon: Smile,
      message: "Air quality is considered satisfactory, and air pollution poses little or no risk.",
      healthPrecautions: {
        general: "It's a great day to be active outside.",
        sensitive: "No restrictions for sensitive groups.",
        outdoor: "Enjoy outdoor activities.",
        indoor: "No need to close windows.",
        exercise: "Ideal for outdoor exercise."
      },
    };
  } else if (aqi <= 100) {
    return {
      level: "Moderate",
      color: "#FFFF00",
      gradient: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-800",
      borderColor: "border-yellow-300",
      icon: Meh,
      message: "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people.",
      healthPrecautions: {
        general: "Most people can be active outside.",
        sensitive: "Unusually sensitive people should consider reducing prolonged or heavy exertion.",
        outdoor: "Generally fine for outdoor activities.",
        indoor: "No need to take special precautions.",
        exercise: "Most people can exercise outdoors without issue."
      },
    };
  } else if (aqi <= 150) {
    return {
      level: "Unhealthy for Sensitive Groups",
      color: "#FF7E00",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100",
      textColor: "text-orange-800",
      borderColor: "border-orange-300",
      icon: Frown,
      message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
      healthPrecautions: {
        general: "The general public is not likely to be affected.",
        sensitive: "People with heart or lung disease, older adults, and children should reduce prolonged or heavy exertion.",
        outdoor: "Limit strenuous outdoor activities if you are in a sensitive group.",
        indoor: "Consider keeping windows closed.",
        exercise: "Sensitive individuals should move exercise indoors."
      },
    };
  } else if (aqi <= 200) {
    return {
      level: "Unhealthy",
      color: "#FF0000",
      gradient: "from-red-600 to-rose-600",
      bgColor: "bg-red-100",
      textColor: "text-red-800",
      borderColor: "border-red-300",
      icon: AlertTriangle,
      message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
      healthPrecautions: {
        general: "Everyone should reduce prolonged or heavy exertion.",
        sensitive: "People with heart or lung disease, older adults, and children should avoid prolonged or heavy exertion.",
        outdoor: "Avoid strenuous outdoor activities.",
        indoor: "Keep windows closed. Consider using an air purifier.",
        exercise: "Avoid outdoor exercise. Opt for indoor activities."
      },
    };
  } else if (aqi <= 300) {
    return {
      level: "Very Unhealthy",
      color: "#8F3F97",
      gradient: "from-purple-600 to-violet-700",
      bgColor: "bg-purple-100",
      textColor: "text-purple-800",
      borderColor: "border-purple-300",
      icon: CloudOff,
      message: "Health alert: everyone may experience more serious health effects.",
      healthPrecautions: {
        general: "Everyone should avoid all outdoor exertion.",
        sensitive: "Sensitive groups should remain indoors and keep activity levels low.",
        outdoor: "Avoid all outdoor activities.",
        indoor: "Keep windows and doors closed. Run an air purifier if available.",
        exercise: "All outdoor exercise should be avoided."
      },
    };
  } else {
    return {
      level: "Hazardous",
      color: "#7E0023",
      gradient: "from-rose-800 to-red-900",
      bgColor: "bg-rose-100",
      textColor: "text-rose-800",
      borderColor: "border-rose-300",
      icon: Skull,
      message: "Health warnings of emergency conditions. The entire population is more likely to be affected.",
      healthPrecautions: {
        general: "Everyone should remain indoors.",
        sensitive: "Remain indoors and keep activity to a minimum.",
        outdoor: "Stay indoors and avoid all outdoor activities.",
        indoor: "Keep windows and doors closed. Use air purifiers on high.",
        exercise: "Do not exercise, even indoors, if air quality is poor inside."
      },
    };
  }
};

const generateCityData = (baseAqi, name) => {
    const level = getAqiInfo(baseAqi);
    return {
      name,
      aqi: baseAqi,
      level: level,
      lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      pollutants: [
        { name: "PM2.5", value: (baseAqi * 0.7).toFixed(1), unit: "μg/m³", description: "Fine Particulates", aqi: Math.round(baseAqi * 1.1) },
        { name: "PM10", value: (baseAqi * 0.9).toFixed(1), unit: "μg/m³", description: "Coarse Particulates", aqi: Math.round(baseAqi * 0.9) },
        { name: "O₃", value: (baseAqi * 0.5).toFixed(1), unit: "ppb", description: "Ozone", aqi: Math.round(baseAqi * 0.8) },
        { name: "NO₂", value: (baseAqi * 0.3).toFixed(1), unit: "ppb", description: "Nitrogen Dioxide", aqi: Math.round(baseAqi * 0.5) },
        { name: "SO₂", value: (baseAqi * 0.1).toFixed(1), unit: "ppb", description: "Sulfur Dioxide", aqi: Math.round(baseAqi * 0.2) },
        { name: "CO", value: (baseAqi * 0.05).toFixed(1), unit: "ppm", description: "Carbon Monoxide", aqi: Math.round(baseAqi * 0.1) },
      ],
      forecast: [
        { day: "Today", aqi: baseAqi },
        { day: "Mon", aqi: Math.max(20, baseAqi - 15 + Math.floor(Math.random() * 10)) },
        { day: "Tue", aqi: Math.max(20, baseAqi - 10 + Math.floor(Math.random() * 15)) },
        { day: "Wed", aqi: Math.max(20, baseAqi + 5 + Math.floor(Math.random() * 20)) },
        { day: "Thu", aqi: Math.max(20, baseAqi + 10 + Math.floor(Math.random() * 10)) },
      ]
    }
}

export const airQualityData = {
  "New York": generateCityData(78, "New York"),
  "Los Angeles": generateCityData(125, "Los Angeles"),
  "London": generateCityData(45, "London"),
  "Tokyo": generateCityData(95, "Tokyo"),
};""