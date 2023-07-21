import { Current, Daily } from "@/types/weatherType";
import { Convert } from "@/utilities/convert";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";

function DailyWeatherViewDOM(props: { daily: Daily[] }) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  const [highchartsOptions, setHighchartsOptions] =
    useState<Highcharts.Options>({
      title: {
        text: "Daily Weather",
      },
      subtitle: {
        text:
          "Source: " +
          '<a href="https://openweathermap.org/" ' +
          'target="_blank">OpenWeather.org</a>',
      },
      chart: {
        shadow: true,
      },
      xAxis: {
        categories: props.daily.map((item) => {
          return new Date(item.dt * 1000).getDate().toString();
        }),
        accessibility: {
          description: "Months of the year",
        },
        crosshair: true,
      },
      yAxis: [
        {
          title: {
            text: "Temperature",
          },
          labels: {
            format: "{value}°",
          },
        },
        {
          title: {
            text: "Precipitation",
          },
          labels: {
            format: "{value} %",
          },
          max: 100,
          opposite: true,
        },
      ],
      tooltip: {
        shared: true,
        useHTML: true,
        headerFormat:
          '<table><tr><th colspan="2">{point.custom.time}</th></tr>',
        pointFormat:
          '<tr><td>Feels Like: </td><td style="text-align: right"><b>{point.custom.feelslike}</b></td></tr>' +
          '<tr><td>Humidity: </td><td style="text-align: right"><b>{point.custom.humidity}</b></td></tr>' +
          '<tr><td>UV: </td><td style="text-align: right"><b>{point.custom.uvi}</b></td></tr>' +
          '<tr><td>Wind Degree: </td><td style="text-align: right"><b>{point.custom.wind_deg}</b></td></tr>' +
          '<tr><td>Wind Speed: </td><td style="text-align: right"><b>{point.custom.wind_speed}</b></td></tr>',
        footerFormat: "</table>",
        valueDecimals: 2,
      },
      plotOptions: {
        spline: {
          marker: {
            radius: 4,
            lineColor: "#666666",
            lineWidth: 1,
          },
        },
      },
      series: [
        {
          type: "spline",
          name: "Temperature",
          yAxis: 0,
          data: props.daily.map((item) => {
            return {
              y: item.temp.max,
              custom: {
                time: "1234",
                feelslike: item.feels_like.day,
                humidity: item.humidity,
                pop: item.pop,
                uvi: item.uvi,
                wind_deg: item.wind_deg,
                wind_gust: item.wind_gust,
                wind_speed: item.wind_speed,
              },
              marker: {
                symbol: `url(https://openweathermap.org/img/wn/${item.weather[0].icon}.png)`,
              },
              accessibility: {
                description: item.weather[0].description,
              },
            };
          }),
        },
        {
          type: "spline",
          name: "Precipitation",
          yAxis: 1,
          data: props.daily.map((item) => {
            return {
              y: item.pop * 100,
            };
          }),
        },
      ],
    });

  useEffect(() => {
    setHighchartsOptions({
      ...highchartsOptions,
      ...{
        xAxis: {
          categories: props.daily.map((item) => {
            return new Date(item.dt * 1000).getDate().toString();
          }),
          accessibility: {
            description: "Months of the year",
          },
          crosshair: true,
        },
        series: [
          {
            type: "spline",
            name: "Temperature",
            yAxis: 0,
            data: props.daily.map((item) => {
              return {
                y: item.temp.max,
                custom: {
                  time: "1234",
                  feelslike: item.feels_like.day,
                  humidity: item.humidity,
                  pop: item.pop,
                  uvi: item.uvi,
                  wind_deg: item.wind_deg,
                  wind_gust: item.wind_gust,
                  wind_speed: item.wind_speed,
                },
                marker: {
                  symbol: `url(https://openweathermap.org/img/wn/${item.weather[0].icon}.png)`,
                },
                accessibility: {
                  description: item.weather[0].description,
                },
              };
            }),
          },
          {
            type: "spline",
            name: "Precipitation",
            yAxis: 1,
            data: props.daily.map((item) => {
              return {
                y: item.pop * 100,
              };
            }),
          },
        ],
      },
    });
  }, [props.daily]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={highchartsOptions}
      ref={chartComponentRef}
    />
  );
}

export default DailyWeatherViewDOM;
