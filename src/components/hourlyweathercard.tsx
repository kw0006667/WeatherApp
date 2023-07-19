import Image from "next/image";
import React from "react";

import { Current } from "@/types/weatherType";

function HourlyWeatherDOM(props: { current: Current }) {
  return (
    <div className="mr-3 ml-3 text-center">
      <p>{new Date(props.current.dt * 1000).getHours()}</p>
      {/* <p>{item.weather[0].main}</p> */}
      <div className="w-20">
        <Image
          className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={`https://openweathermap.org/img/wn/${props.current.weather[0].icon}@2x.png`}
          alt="current weather"
          width={100}
          height={50}
        />
      </div>
      <p>{props.current.temp.toFixed(0)}°</p>
    </div>
  );
}

export default HourlyWeatherDOM;
