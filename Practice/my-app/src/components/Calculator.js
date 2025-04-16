import React, { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

export default function Calculator() {
  const [state, setState] = useState({
    scale: "c",
    temperature: 0,
  });

  const handleTemperatureChange = (obj) => {
    // 어디에서 수정했는지, 값 (온도)는 무엇인지
    // obj.scale, obj.temperature
    setState({ ...state, scale: obj.scale, temperature: obj.temperature });
  }

  // 섭씨, 화씨 변환 함수
  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // 온도 변환 함수
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return "";
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  const { scale, temperature } = state;
  
  // 온도 변환
  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  // 하위 컴포넌트 - 값을 수정, 섭씨/화씨에서 수정한건지 알고 있어야 함

  return (
    <>
      <TemperatureInput scale={"c"} temperature={celsius} onTemperatureChange={handleTemperatureChange}/>
      <TemperatureInput scale={"f"} temperature={fahrenheit} onTemperatureChange={handleTemperatureChange}/>
    </>
  );
}
