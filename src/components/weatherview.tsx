import Image from "next/image";
import React, { useState } from "react";
import { GeoData } from "@/types/geoType";
import { WeatherData } from "@/types/weatherType";
import HourlyWeatherDOM from "./hourlyweathercard";
import DailyWeatherDOM from "./dailyweathercard";
import { Convert } from "@/utilities/convert";
import { TECollapse } from "tw-elements-react";
import HourlyWeatherViewDOM from "./hourlyweatherview";
import DailyWeatherViewDOM from "./dailyweatherview";

function WeatherView(props: {
  weatherData: WeatherData;
  locationData: GeoData;
}) {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  
  return (
    <div className="">
      <div className="flex text-center items-center min-w-max m-auto">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <Image
            className="rounded-t-lg"
            src={`https://openweathermap.org/img/wn/${props.weatherData.current.weather[0].icon}@2x.png`}
            alt=""
            width="100"
            height="100"
          />
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {`${props.locationData.name}, ${
              props.locationData.state ? props.locationData.state + ", " : ""
            } ${props.locationData.country}`}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props.weatherData.current.weather[0].main}
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {props.weatherData.current.temp}°
          </p>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Feels Like {props.weatherData.current.feels_like.toFixed(0)}°
          </p>
        </div>
      </div>

      <div>
        {/* Hourly weather */}
        {/* <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start my-8 shadow-sm rounded-lg p-2">
          {props.weatherData.hourly.map((item) => (
            <HourlyWeatherDOM key={item.dt} current={item}/>
          ))}
        </div> */}

        <HourlyWeatherViewDOM hourly={props.weatherData.hourly} />
        <DailyWeatherViewDOM daily={props.weatherData.daily} />

        <div id="accordionExample">
          {
            props.weatherData.daily.map(item => (
              <React.Fragment key={item.dt}>
                <div
                  className="rounded-t-lg border border-neutral-200  dark:border-neutral-600">
                  <h2 className="mb-0"  id={`heading${item.dt}`}>
                    <button
                      className={`${
                        activeElement === `element${item.dt}`
                          ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                          : `transition-none rounded-b-[15px]`
                      } group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none `}
                      type="button"
                      onClick={() => handleClick(`element${item.dt}`)}
                      aria-expanded="true"
                      aria-controls={`collapse${item.dt}`}>
                      <DailyWeatherDOM daily={item} />
                      <span
                        className={`${
                          activeElement === `element${item.dt}`
                            ? `rotate-[-180deg] -mr-1`
                            : `rotate-0 fill-[#212529]  dark:fill-white`
                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                        >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                  </h2>
                  <TECollapse
          show={activeElement === `element${item.dt}`}
          className="!mt-0 !rounded-b-none !shadow-none">
                    <div className="px-5 py-4">
                      <p>{item.summary}</p>
                    </div>
                  </TECollapse>
                </div>
              </React.Fragment>
            ))}
        </div>

        <React.Fragment>
            <div className='my-10 shadow-sm rounded-sm p-2'>
              <p>Sunrise</p>
              <p>{Convert.getTime(new Date((props.weatherData.current.sunrise ?? 0) * 1000))} - {Convert.getTime(new Date((props.weatherData.current.sunset ?? 0) * 1000))}</p>
            </div>
            <div className='my-10 shadow-sm rounded-sm p-2'>
              <div>
                <p>UV</p>
                <p>{props.weatherData?.current.uvi.toFixed(0)}</p>
              </div>
            </div>
            <div className='my-10 shadow-sm rounded-sm p-2'>
              <p>Wind</p>
              <p>Wind Degree: {props.weatherData?.current.wind_deg.toFixed(0)}</p>
              <p>Wind Speed: {props.weatherData.current.wind_speed.toFixed(0)}</p>
              <p>Wind Gust: {props.weatherData.current.wind_gust ?? "none" }</p>
            </div>
            <div className='my-10 shadow-sm rounded-sm p-2'>
              <p>Humidity</p>
              <p>{props.weatherData.current.humidity}</p>
            </div>
          </React.Fragment>
      </div>
    </div>
  );
}

export default WeatherView;
