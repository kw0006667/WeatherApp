import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react';
import { GeoData } from '@/types/geoType';
import { WeatherData } from '@/types/weatherType';
import React from 'react';

import { Convert } from '@/utilities/convert';
import dynamic from "next/dynamic";

const DynamicWeatherViewComponent = dynamic(() => import("../components/weatherview"), { ssr: false });

const inter = Inter({ subsets: ['latin'] })

export interface LocalNames {
  it?: string;
  ko?: string;
  zh?: string;
  ar?: string;
  ja?: string;
  pt?: string;
  en:  string;
  bg?: string;
  fr?: string;
  es?: string;
  fa?: string;
  de?: string;
  vi?: string;
}
export interface Location {
  name:         string;
  local_names?: LocalNames;
  lat:          number;
  lon:          number;
  country:      string;
  state:        string;
}

export default function Home() {
  const [locationData, setLocationData] = useState<null | GeoData>(null);
  const [weatherData, setWeatherData] = useState<null | WeatherData>(null);
  const [currentLocationName, setCurrentLocationName] = useState<null | string>(null);

  useEffect(() => {
    // initTE({Collapse});
    setLocationData(getCurrentLocationFromLocalStorage());
    setWeatherData(getCurrentWeatherDataFromLocalStorage());
  }, []);

  const searchLocation = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const element = document.getElementById('print');
    
    if (event.key === 'Enter') {

      fetch('http://localhost:3000/api/weatherapi')
        .then(response => {
          if (response.status === 200) {
            return response.json() as Promise<WeatherData>;
          }
        })
        .then(data => {
          if (data) {
              // element.innerText = data.current.weather[0].description;
              setWeatherData(data);
            }
        });
        if (element) {
          // element.innerHTML = event.currentTarget.value;
          // fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${event.currentTarget.value}&limit=5&appid=${process.env.OPENWEATHER_APPID}`, { 
          //   method: "GET"
          // }).then(response => {
          //   if (response.status === 200) {
          //     return response.json() as Promise<Location[]>;
          //   }
          // }).then(data => {
          //   if (data && data.length > 0) {
          //     element.innerText = data[0].local_names?.zh ?? '';
          //     const currentLocation = data[0];

          //     fetch(`https://api.openweathermap.org/data/2.5/onecall?lon=${currentLocation.lon}&lat=${currentLocation.lat}&appid=${process.env.OPENWEATHER_APPID}`)
          //     .then(response => {
          //       return response.json() as Promise<WeatherData>;
          //     })
          //     .then(data => {
          //       if (data) {
          //         element.innerText = data.current.weather[0].description;
          //         console.log(data.current.weather[0].description);
          //       }
          //     })
          //   }
          // });
          
      }
    } else {
      
      if (event.currentTarget.value === "") {
        return;
      }
      // element.innerHTML = event.currentTarget.value;
          fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${event.currentTarget.value}&limit=10&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_APPID}`, { 
            method: "GET"
          }).then(response => {
            if (response.status === 200) {
              return response.json() as Promise<GeoData[]>;
            }
          }).then(data => {
            if (data && data.length > 0) {
              // setLocationData(data);
            }
          });
      // fetch('http://localhost:3000/api/geoapi')
      // .then(response => {
      //   if (response.status === 200) {
      //     return response.json() as Promise<GeoData[]>;
      //   }
      // })
      // .then(data => {
      //   if (data) {
      //     setLocationData(data);
      //   }
      // });
    }
  }

  const chooseLocation = (e: React.MouseEvent<HTMLLIElement>) => {
    const targetValue = e.currentTarget.value;
    if (targetValue !== null && locationData) {
      // const displayName = `${locationData[targetValue].name}, ${locationData[targetValue].state ?? locationData[targetValue].country}`;
      // setCurrentLocationName(displayName);
      // const targetLocation = targetValue.split(',');
      // if (targetLocation.length === 2) {
      //   const lat = parseFloat(targetLocation[0]);
      //   const lon = parseFloat(targetLocation[1]);
      //   console.log(lat + ',' + lon);
      // }
    }
  }

  const getCurrentLocation = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.geolocation.getCurrentPosition((position) => {
      fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=5&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_APPID}`)
      .then(responsive => {
        if (responsive.status === 200) {
          return responsive.json() as Promise<GeoData[]>;
        }
      })
      .then(data => {
        if (data && data.length > 0) {
          const displayName = `${data[0].name}, ${data[0].state ? data[0].state + ", " : ""} ${data[0].country}`;
          setLocationData(data[0]);
          setCurrentLocationName(displayName);
          saveCurrentLocationToLocalStorage(data[0]);

          if (isCurrentWeatherNeedsRefresh(data[0])) {
            fetch(`http://localhost:3000/api/weatherapi?lat=${data[0].lat}&lon=${data[0].lon}`)
            .then(response => {
              return response.json() as Promise<WeatherData>;
            })
            .then(data => {
              if (data) {
                setWeatherData(data);
                saveCurrentWeatherDataToLocalStorage(data);
              }
            });
          } else {
            const currentWeatherData = getCurrentWeatherDataFromLocalStorage();
            setWeatherData(currentWeatherData);
          }
        }
      })
    }, (error) => {
      console.error(`Error: ${error}`);
    }, {
      enableHighAccuracy: false
    });
  }

  const saveCurrentLocationToLocalStorage = (data: GeoData) => {
    if (window !== undefined) {
      window.localStorage.setItem("currentLocationGeo", JSON.stringify(data));
    }
  }

  const getCurrentLocationFromLocalStorage = (): GeoData | null => {
    if (window !== undefined) {
      const currentLocationData = window.localStorage.getItem("currentLocationGeo");
      if (currentLocationData) {
        const cacheLocationData = JSON.parse(currentLocationData) as GeoData;
        return cacheLocationData;
      }
    }

    return null;
  }

  const saveCurrentWeatherDataToLocalStorage = (data: WeatherData) => {
    if (window !== undefined) {
      window.localStorage.setItem("currentLocationWeather", JSON.stringify(data));
    }
  }

  const getCurrentWeatherDataFromLocalStorage = (): WeatherData | null => {
    if (window !== undefined) {
      const currentWeatherData = window.localStorage.getItem("currentLocationWeather");
      if (currentWeatherData) {
        const cacheWeatherData = JSON.parse(currentWeatherData) as WeatherData;
        return cacheWeatherData;
      }
    }

    return null;
  }

  const isCurrentWeatherNeedsRefresh = (geoData: GeoData): boolean => {
    const currentTime = Date.now();
    const previousWeatherData = getCurrentWeatherDataFromLocalStorage();
    if (previousWeatherData) {
      const previousGeoData = {lat: previousWeatherData.lat, lon: previousWeatherData.lon} as GeoData;
      if (isSameLocation(geoData, previousGeoData) && currentTime - previousWeatherData.current.dt * 1000 < 1800000) {
        return false;
      }
    }

    return true;
  }

  const isSameLocation = (geoData_1: GeoData, geoData_2: GeoData): boolean => {
    if (!geoData_1 || !geoData_2) {
      return false;
    }

    if (geoData_1.lat.toFixed(3) === geoData_2.lat.toFixed(3) && geoData_1.lon.toFixed(3) === geoData_2.lon.toFixed(3)) {
      return true;
    }

    return false;
  }
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="mb-3">
          <div className="relative mb-4 flex w-full min-w-[500px] flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon3"
              onKeyUp={(e) => {searchLocation(e)}} />

            {/* Search button */}
            <button
              className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              onClick={(e) => {getCurrentLocation(e)}}
              data-te-ripple-init>
              Current Location
            </button>
          </div>
        </div>
        {weatherData && locationData ? (
          <DynamicWeatherViewComponent weatherData={weatherData} locationData={locationData} />
        ) : <></>}
  
      <div className='container'>
        {/* Current detail */}
        { weatherData ? (
          <React.Fragment>
            <div className='my-10 shadow-sm rounded-sm p-2'>
              <p>Sunrise</p>
              <p>{Convert.getTime(new Date((weatherData.current.sunrise ?? 0) * 1000))} - {Convert.getTime(new Date((weatherData.current.sunset ?? 0) * 1000))}</p>
            </div>
            <div className='my-10 shadow-sm rounded-sm p-2'>
              <div>
                <p>UV</p>
                <p>{weatherData?.current.uvi.toFixed(0)}</p>
              </div>
            </div>
            <div className='my-10 shadow-sm rounded-sm p-2'>
              <p>Wind</p>
              <p>Wind Degree: {weatherData?.current.wind_deg.toFixed(0)}</p>
              <p>Wind Speed: {weatherData.current.wind_speed.toFixed(0)}</p>
              <p>Wind Gust: {weatherData.current.wind_gust ?? "none" }</p>
            </div>
            <div className='my-10 shadow-sm rounded-sm p-2'>
              <p>Humidity</p>
              <p>{weatherData.current.humidity}</p>
            </div>
          </React.Fragment>
        ) : <></>}
        

        

      </div>
    </main>
  )
}
