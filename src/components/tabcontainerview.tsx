import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { GeoData } from "@/types/geoType";
import { WeatherData } from "@/types/weatherType";
import WeatherView from "./weatherview";

function TabContainerViewDOM(props: {
  currentWeatherData: WeatherData;
  currentLocationData: GeoData;
  dataList: { weatherData: WeatherData; locationData: GeoData }[];
}) {
  const [justifyActive, setJustifyActive] = useState("tab0");

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };
  return (
    <div className="mb-3 overflow-y-scroll w-[90vw]">
      <TETabs justify className=" sticky top-0 bg-white/75  backdrop-blur z-[50000] ">
        <TETabsItem
          onClick={() => handleJustifyClick(`tab0`)}
          active={justifyActive === `tab0`}
        >
          Current
        </TETabsItem>
        {props.dataList?.map((item, index) => (
          <TETabsItem
            key={index}
            onClick={() => handleJustifyClick(`tab${index + 1}`)}
            active={justifyActive === `tab${index + 1}`}
          >
            {item.locationData.name}
          </TETabsItem>
        ))}
      </TETabs>

      <TETabsContent>
        <TETabsPane show={justifyActive === `tab0`}>
          <WeatherView
            weatherData={props.currentWeatherData}
            locationData={props.currentLocationData}
          />
        </TETabsPane>

        {props.dataList ? (
          props.dataList?.map((item, index) => (
            <TETabsPane
              key={item.weatherData.current.dt}
              show={justifyActive === `tab${index + 1}`}
            >
              <WeatherView
                weatherData={item.weatherData}
                locationData={item.locationData}
              />
            </TETabsPane>
          ))
        ) : (
          <></>
        )}
      </TETabsContent>
    </div>
  );
}

export default TabContainerViewDOM;
