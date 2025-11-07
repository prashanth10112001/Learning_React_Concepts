import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
  const [tempC, setTempC] = useState("");
  const [tempF, setTempF] = useState("");

  const handleCelsiusChange = (value) => {
    setTempC(value);
    setTempF(value !== "" ? (value * 9) / 5 + 32 : "");
  };

  const handleFahrenheitChange = (value) => {
    setTempF(value);
    setTempC(value !== "" ? ((value - 32) * 5) / 9 : "");
  };

  return (
    <div>
      <TemperatureInput
        scale="Celsius"
        temperature={tempC}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="Fahrenheit"
        temperature={tempF}
        onTemperatureChange={handleFahrenheitChange}
      />
    </div>
  );
}
