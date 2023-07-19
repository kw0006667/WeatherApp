import Image from 'next/image';
import React from 'react';
import { Daily } from "@/types/weatherType";
import { Convert } from '@/utilities/convert';

function DailyWeatherDOM(props:{daily: Daily}) {
  return (
    <div className='my-4 flex items-baseline justify-between border-t-2'>
      <p>{Convert.getWeek(new Date(props.daily.dt * 1000).getDay())}</p>
      <div className='w-10 h-10'>
        <Image src={`https://openweathermap.org/img/wn/${props.daily.weather[0].icon}@2x.png`} alt='current weather' width={100} height={50} />
      </div>
      <p>{props.daily.temp.min.toFixed(0)}° - {props.daily.temp.max.toFixed(0)}°</p>
    </div>
  );
}

export default DailyWeatherDOM;