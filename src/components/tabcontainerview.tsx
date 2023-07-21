import React, { useEffect, useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";
import { GeoData } from "@/types/geoType";
import { WeatherData, WeatherLocationDataset } from "@/types/weatherType";
import WeatherView from "./weatherview";

function TabContainerViewDOM(props: {
  currentWeatherData: WeatherData;
  currentLocationData: GeoData;
  dataList: WeatherLocationDataset[];
  currentTabIndex: number;
  updateWeatherData: (targetLocation: GeoData, isCurrentLocation: boolean) => any;
}) {
  const [justifyActive, setJustifyActive] = useState(0);

  useEffect(() => {
    handleJustifyClick(props.currentTabIndex);
  }, [props.currentTabIndex]);

  const handleJustifyClick = (value: number) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
    if (value === 0) {
      props.updateWeatherData(props.currentLocationData, true);
    } else {
      props.updateWeatherData(props.dataList[value - 1].locationData, false);
    }
  };

  return (
    <div className="mb-3 overflow-y-scroll w-[90vw]">
      <TETabs justify className=" sticky top-0 bg-white/75  backdrop-blur z-[50000] ">
        <TETabsItem
          onClick={() => handleJustifyClick(0)}
          active={justifyActive === 0}
        >
          Current
        </TETabsItem>
        {props.dataList?.map((item, index) => (
          <TETabsItem
            key={index}
            onClick={() => handleJustifyClick(index + 1)}
            active={justifyActive === index + 1}
          >
            {item.locationData.name}
          </TETabsItem>
        ))}
      </TETabs>

      <TETabsContent>
        <TETabsPane show={justifyActive === 0}>
          <WeatherView
            weatherData={props.currentWeatherData}
            locationData={props.currentLocationData}
          />
        </TETabsPane>

        {props.dataList ? (
          props.dataList?.map((item, index) => (
            <TETabsPane
              key={item.weatherData.current.dt}
              show={justifyActive === index + 1}
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
