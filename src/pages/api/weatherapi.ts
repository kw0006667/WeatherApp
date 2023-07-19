// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { WeatherData } from '@/types/weatherType'
import { enabledFeatures } from '../../features/enabledFeatures';
import Cookies from 'cookies';

type Data = {
  name: string
}

type weatherapiPara = {
    lat: string,
    lon: string,
    exclude?: string,
    units?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WeatherData>
) {
    if (enabledFeatures.isWeatherApiEnabled()) {
        const requestParas = req.query as weatherapiPara;
        if (requestParas.lat && requestParas.lon) {
            console.log(requestParas);
            fetch(`https://api.openweathermap.org/data/3.0/onecall?lon=${requestParas.lon}&lat=${requestParas.lat}&exclude=${requestParas.exclude ?? ""}&units=${requestParas.units ?? "metric"}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_APPID}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json() as Promise<WeatherData>;
                }
            })
            .then(data => {
                if (data) {
                    // cookies().set('currentLocationWeather', JSON.stringify(data), { secure: true});
                    // const cookie = new Cookies(req, res);
                    // cookie.set("currentLocationWeather", JSON.stringify(data));
                    res.status(200).json(data);
                }
            });
        }
    } else {
        res.status(200).json(JSON.parse(`{
            "lat": 35.6828,
            "lon": 139.7595,
            "timezone": "Asia/Tokyo",
            "timezone_offset": 32400,
            "current": {
              "dt": 1689806101,
              "sunrise": 1689795554,
              "sunset": 1689846895,
              "temp": 27.79,
              "feels_like": 30.51,
              "pressure": 1004,
              "humidity": 72,
              "dew_point": 22.28,
              "uvi": 3,
              "clouds": 75,
              "visibility": 10000,
              "wind_speed": 5.14,
              "wind_deg": 40,
              "weather": [
                {
                  "id": 803,
                  "main": "Clouds",
                  "description": "broken clouds",
                  "icon": "04d"
                }
              ]
            },
            "minutely": [
              {
                "dt": 1689806160,
                "precipitation": 0
              },
              {
                "dt": 1689806220,
                "precipitation": 0
              },
              {
                "dt": 1689806280,
                "precipitation": 0
              },
              {
                "dt": 1689806340,
                "precipitation": 0
              },
              {
                "dt": 1689806400,
                "precipitation": 0
              },
              {
                "dt": 1689806460,
                "precipitation": 0
              },
              {
                "dt": 1689806520,
                "precipitation": 0
              },
              {
                "dt": 1689806580,
                "precipitation": 0
              },
              {
                "dt": 1689806640,
                "precipitation": 0
              },
              {
                "dt": 1689806700,
                "precipitation": 0
              },
              {
                "dt": 1689806760,
                "precipitation": 0
              },
              {
                "dt": 1689806820,
                "precipitation": 0
              },
              {
                "dt": 1689806880,
                "precipitation": 0
              },
              {
                "dt": 1689806940,
                "precipitation": 0
              },
              {
                "dt": 1689807000,
                "precipitation": 0
              },
              {
                "dt": 1689807060,
                "precipitation": 0
              },
              {
                "dt": 1689807120,
                "precipitation": 0
              },
              {
                "dt": 1689807180,
                "precipitation": 0
              },
              {
                "dt": 1689807240,
                "precipitation": 0
              },
              {
                "dt": 1689807300,
                "precipitation": 0
              },
              {
                "dt": 1689807360,
                "precipitation": 0
              },
              {
                "dt": 1689807420,
                "precipitation": 0
              },
              {
                "dt": 1689807480,
                "precipitation": 0
              },
              {
                "dt": 1689807540,
                "precipitation": 0
              },
              {
                "dt": 1689807600,
                "precipitation": 0
              },
              {
                "dt": 1689807660,
                "precipitation": 0
              },
              {
                "dt": 1689807720,
                "precipitation": 0
              },
              {
                "dt": 1689807780,
                "precipitation": 0
              },
              {
                "dt": 1689807840,
                "precipitation": 0
              },
              {
                "dt": 1689807900,
                "precipitation": 0
              },
              {
                "dt": 1689807960,
                "precipitation": 0
              },
              {
                "dt": 1689808020,
                "precipitation": 0
              },
              {
                "dt": 1689808080,
                "precipitation": 0
              },
              {
                "dt": 1689808140,
                "precipitation": 0
              },
              {
                "dt": 1689808200,
                "precipitation": 0
              },
              {
                "dt": 1689808260,
                "precipitation": 0
              },
              {
                "dt": 1689808320,
                "precipitation": 0
              },
              {
                "dt": 1689808380,
                "precipitation": 0
              },
              {
                "dt": 1689808440,
                "precipitation": 0
              },
              {
                "dt": 1689808500,
                "precipitation": 0
              },
              {
                "dt": 1689808560,
                "precipitation": 0
              },
              {
                "dt": 1689808620,
                "precipitation": 0
              },
              {
                "dt": 1689808680,
                "precipitation": 0
              },
              {
                "dt": 1689808740,
                "precipitation": 0
              },
              {
                "dt": 1689808800,
                "precipitation": 0
              },
              {
                "dt": 1689808860,
                "precipitation": 0
              },
              {
                "dt": 1689808920,
                "precipitation": 0
              },
              {
                "dt": 1689808980,
                "precipitation": 0
              },
              {
                "dt": 1689809040,
                "precipitation": 0
              },
              {
                "dt": 1689809100,
                "precipitation": 0
              },
              {
                "dt": 1689809160,
                "precipitation": 0
              },
              {
                "dt": 1689809220,
                "precipitation": 0
              },
              {
                "dt": 1689809280,
                "precipitation": 0
              },
              {
                "dt": 1689809340,
                "precipitation": 0
              },
              {
                "dt": 1689809400,
                "precipitation": 0
              },
              {
                "dt": 1689809460,
                "precipitation": 0
              },
              {
                "dt": 1689809520,
                "precipitation": 0
              },
              {
                "dt": 1689809580,
                "precipitation": 0
              },
              {
                "dt": 1689809640,
                "precipitation": 0
              },
              {
                "dt": 1689809700,
                "precipitation": 0
              },
              {
                "dt": 1689809760,
                "precipitation": 0
              }
            ],
            "hourly": [
              {
                "dt": 1689804000,
                "temp": 27.46,
                "feels_like": 30.09,
                "pressure": 1004,
                "humidity": 74,
                "dew_point": 22.41,
                "uvi": 1.39,
                "clouds": 73,
                "visibility": 10000,
                "wind_speed": 4.05,
                "wind_deg": 75,
                "wind_gust": 4.7,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.53
              },
              {
                "dt": 1689807600,
                "temp": 27.79,
                "feels_like": 30.51,
                "pressure": 1004,
                "humidity": 72,
                "dew_point": 22.28,
                "uvi": 3,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 3.83,
                "wind_deg": 78,
                "wind_gust": 4.44,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.5
              },
              {
                "dt": 1689811200,
                "temp": 27.53,
                "feels_like": 30.01,
                "pressure": 1004,
                "humidity": 72,
                "dew_point": 22.03,
                "uvi": 5.03,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 3.63,
                "wind_deg": 73,
                "wind_gust": 4,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.42
              },
              {
                "dt": 1689814800,
                "temp": 27.39,
                "feels_like": 29.53,
                "pressure": 1005,
                "humidity": 70,
                "dew_point": 21.43,
                "uvi": 6.79,
                "clouds": 85,
                "visibility": 10000,
                "wind_speed": 3.88,
                "wind_deg": 88,
                "wind_gust": 4.16,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.27
              },
              {
                "dt": 1689818400,
                "temp": 27.5,
                "feels_like": 29.52,
                "pressure": 1006,
                "humidity": 68,
                "dew_point": 21.07,
                "uvi": 8.04,
                "clouds": 90,
                "visibility": 10000,
                "wind_speed": 4.03,
                "wind_deg": 96,
                "wind_gust": 4.68,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.42
              },
              {
                "dt": 1689822000,
                "temp": 27.94,
                "feels_like": 29.81,
                "pressure": 1006,
                "humidity": 64,
                "dew_point": 20.5,
                "uvi": 8.27,
                "clouds": 95,
                "visibility": 10000,
                "wind_speed": 4.14,
                "wind_deg": 102,
                "wind_gust": 5.03,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.51
              },
              {
                "dt": 1689825600,
                "temp": 29.26,
                "feels_like": 31,
                "pressure": 1006,
                "humidity": 57,
                "dew_point": 19.6,
                "uvi": 6.61,
                "clouds": 88,
                "visibility": 10000,
                "wind_speed": 4.36,
                "wind_deg": 105,
                "wind_gust": 4.85,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.51
              },
              {
                "dt": 1689829200,
                "temp": 30.05,
                "feels_like": 31.79,
                "pressure": 1006,
                "humidity": 54,
                "dew_point": 19.35,
                "uvi": 5.09,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 4.91,
                "wind_deg": 117,
                "wind_gust": 5.04,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.51
              },
              {
                "dt": 1689832800,
                "temp": 29.83,
                "feels_like": 31.6,
                "pressure": 1007,
                "humidity": 55,
                "dew_point": 19.52,
                "uvi": 3.29,
                "clouds": 71,
                "visibility": 10000,
                "wind_speed": 6.06,
                "wind_deg": 122,
                "wind_gust": 6.2,
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "pop": 0.51,
                "rain": {
                  "1h": 0.1
                }
              },
              {
                "dt": 1689836400,
                "temp": 29.21,
                "feels_like": 30.92,
                "pressure": 1007,
                "humidity": 57,
                "dew_point": 19.74,
                "uvi": 1.15,
                "clouds": 65,
                "visibility": 10000,
                "wind_speed": 5.07,
                "wind_deg": 109,
                "wind_gust": 5.4,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.32
              },
              {
                "dt": 1689840000,
                "temp": 29.39,
                "feels_like": 30.9,
                "pressure": 1007,
                "humidity": 55,
                "dew_point": 19.38,
                "uvi": 0.42,
                "clouds": 51,
                "visibility": 10000,
                "wind_speed": 5.11,
                "wind_deg": 118,
                "wind_gust": 5.54,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.31
              },
              {
                "dt": 1689843600,
                "temp": 28.87,
                "feels_like": 30.39,
                "pressure": 1008,
                "humidity": 57,
                "dew_point": 19.26,
                "uvi": 0.09,
                "clouds": 49,
                "visibility": 10000,
                "wind_speed": 5.56,
                "wind_deg": 112,
                "wind_gust": 5.73,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                  }
                ],
                "pop": 0.27
              },
              {
                "dt": 1689847200,
                "temp": 27.91,
                "feels_like": 29.32,
                "pressure": 1009,
                "humidity": 60,
                "dew_point": 19.41,
                "uvi": 0,
                "clouds": 45,
                "visibility": 10000,
                "wind_speed": 5.08,
                "wind_deg": 101,
                "wind_gust": 5.25,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "pop": 0.27
              },
              {
                "dt": 1689850800,
                "temp": 26.99,
                "feels_like": 28.36,
                "pressure": 1009,
                "humidity": 64,
                "dew_point": 19.49,
                "uvi": 0,
                "clouds": 40,
                "visibility": 10000,
                "wind_speed": 4.84,
                "wind_deg": 81,
                "wind_gust": 5.01,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "pop": 0.2
              },
              {
                "dt": 1689854400,
                "temp": 26.37,
                "feels_like": 26.37,
                "pressure": 1010,
                "humidity": 66,
                "dew_point": 19.48,
                "uvi": 0,
                "clouds": 33,
                "visibility": 10000,
                "wind_speed": 4.94,
                "wind_deg": 61,
                "wind_gust": 5.56,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "pop": 0.2
              },
              {
                "dt": 1689858000,
                "temp": 25.94,
                "feels_like": 26.39,
                "pressure": 1010,
                "humidity": 69,
                "dew_point": 19.8,
                "uvi": 0,
                "clouds": 3,
                "visibility": 10000,
                "wind_speed": 4.93,
                "wind_deg": 57,
                "wind_gust": 5.91,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0.07
              },
              {
                "dt": 1689861600,
                "temp": 25.53,
                "feels_like": 26.04,
                "pressure": 1010,
                "humidity": 73,
                "dew_point": 20.28,
                "uvi": 0,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 4.42,
                "wind_deg": 58,
                "wind_gust": 5.53,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0.07
              },
              {
                "dt": 1689865200,
                "temp": 25.27,
                "feels_like": 25.81,
                "pressure": 1010,
                "humidity": 75,
                "dew_point": 20.47,
                "uvi": 0,
                "clouds": 10,
                "visibility": 10000,
                "wind_speed": 4.31,
                "wind_deg": 57,
                "wind_gust": 5.57,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0.07
              },
              {
                "dt": 1689868800,
                "temp": 25.15,
                "feels_like": 25.68,
                "pressure": 1010,
                "humidity": 75,
                "dew_point": 20.38,
                "uvi": 0,
                "clouds": 12,
                "visibility": 10000,
                "wind_speed": 4.33,
                "wind_deg": 50,
                "wind_gust": 5.88,
                "weather": [
                  {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                  }
                ],
                "pop": 0.07
              },
              {
                "dt": 1689872400,
                "temp": 24.99,
                "feels_like": 25.5,
                "pressure": 1011,
                "humidity": 75,
                "dew_point": 20.25,
                "uvi": 0,
                "clouds": 16,
                "visibility": 10000,
                "wind_speed": 4.4,
                "wind_deg": 41,
                "wind_gust": 6.03,
                "weather": [
                  {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                  }
                ],
                "pop": 0.07
              },
              {
                "dt": 1689876000,
                "temp": 24.9,
                "feels_like": 25.4,
                "pressure": 1011,
                "humidity": 75,
                "dew_point": 20.08,
                "uvi": 0,
                "clouds": 22,
                "visibility": 10000,
                "wind_speed": 4.81,
                "wind_deg": 38,
                "wind_gust": 6.52,
                "weather": [
                  {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                  }
                ],
                "pop": 0.03
              },
              {
                "dt": 1689879600,
                "temp": 24.85,
                "feels_like": 25.32,
                "pressure": 1011,
                "humidity": 74,
                "dew_point": 19.97,
                "uvi": 0,
                "clouds": 71,
                "visibility": 10000,
                "wind_speed": 4.77,
                "wind_deg": 42,
                "wind_gust": 6.77,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689883200,
                "temp": 24.79,
                "feels_like": 25.26,
                "pressure": 1012,
                "humidity": 74,
                "dew_point": 19.97,
                "uvi": 0,
                "clouds": 78,
                "visibility": 10000,
                "wind_speed": 4.42,
                "wind_deg": 47,
                "wind_gust": 6.38,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689886800,
                "temp": 24.88,
                "feels_like": 25.36,
                "pressure": 1013,
                "humidity": 74,
                "dew_point": 19.91,
                "uvi": 0.36,
                "clouds": 85,
                "visibility": 10000,
                "wind_speed": 4.21,
                "wind_deg": 48,
                "wind_gust": 6.01,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689890400,
                "temp": 25.06,
                "feels_like": 25.55,
                "pressure": 1014,
                "humidity": 74,
                "dew_point": 20.07,
                "uvi": 1.09,
                "clouds": 88,
                "visibility": 10000,
                "wind_speed": 4.14,
                "wind_deg": 45,
                "wind_gust": 5.57,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.08
              },
              {
                "dt": 1689894000,
                "temp": 25.46,
                "feels_like": 25.97,
                "pressure": 1014,
                "humidity": 73,
                "dew_point": 20.14,
                "uvi": 2.36,
                "clouds": 91,
                "visibility": 10000,
                "wind_speed": 4.4,
                "wind_deg": 43,
                "wind_gust": 5.68,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.08
              },
              {
                "dt": 1689897600,
                "temp": 26.28,
                "feels_like": 26.28,
                "pressure": 1014,
                "humidity": 70,
                "dew_point": 20.12,
                "uvi": 3.95,
                "clouds": 91,
                "visibility": 10000,
                "wind_speed": 4.51,
                "wind_deg": 44,
                "wind_gust": 5.49,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.08
              },
              {
                "dt": 1689901200,
                "temp": 27.17,
                "feels_like": 28.71,
                "pressure": 1014,
                "humidity": 65,
                "dew_point": 19.94,
                "uvi": 5.78,
                "clouds": 81,
                "visibility": 10000,
                "wind_speed": 4.49,
                "wind_deg": 47,
                "wind_gust": 5.1,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.08
              },
              {
                "dt": 1689904800,
                "temp": 28.2,
                "feels_like": 29.75,
                "pressure": 1013,
                "humidity": 60,
                "dew_point": 19.55,
                "uvi": 6.85,
                "clouds": 79,
                "visibility": 10000,
                "wind_speed": 4.6,
                "wind_deg": 54,
                "wind_gust": 4.97,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.12
              },
              {
                "dt": 1689908400,
                "temp": 29.48,
                "feels_like": 31.04,
                "pressure": 1013,
                "humidity": 55,
                "dew_point": 19.23,
                "uvi": 7.04,
                "clouds": 75,
                "visibility": 10000,
                "wind_speed": 4.54,
                "wind_deg": 55,
                "wind_gust": 4.62,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.12
              },
              {
                "dt": 1689912000,
                "temp": 30.1,
                "feels_like": 31.53,
                "pressure": 1013,
                "humidity": 52,
                "dew_point": 18.91,
                "uvi": 3.75,
                "clouds": 81,
                "visibility": 10000,
                "wind_speed": 4.22,
                "wind_deg": 58,
                "wind_gust": 4.21,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.12
              },
              {
                "dt": 1689915600,
                "temp": 30.92,
                "feels_like": 32.29,
                "pressure": 1013,
                "humidity": 49,
                "dew_point": 18.77,
                "uvi": 2.89,
                "clouds": 81,
                "visibility": 10000,
                "wind_speed": 4.25,
                "wind_deg": 73,
                "wind_gust": 3.97,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.12
              },
              {
                "dt": 1689919200,
                "temp": 30.63,
                "feels_like": 32.02,
                "pressure": 1012,
                "humidity": 50,
                "dew_point": 18.86,
                "uvi": 1.87,
                "clouds": 83,
                "visibility": 10000,
                "wind_speed": 5.24,
                "wind_deg": 80,
                "wind_gust": 4.28,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.12
              },
              {
                "dt": 1689922800,
                "temp": 29.75,
                "feels_like": 31.15,
                "pressure": 1013,
                "humidity": 53,
                "dew_point": 18.93,
                "uvi": 0.69,
                "clouds": 92,
                "visibility": 10000,
                "wind_speed": 5.48,
                "wind_deg": 75,
                "wind_gust": 5.01,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.16
              },
              {
                "dt": 1689926400,
                "temp": 29.19,
                "feels_like": 30.59,
                "pressure": 1013,
                "humidity": 55,
                "dew_point": 19.03,
                "uvi": 0.25,
                "clouds": 89,
                "visibility": 10000,
                "wind_speed": 5.91,
                "wind_deg": 73,
                "wind_gust": 5.62,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.18
              },
              {
                "dt": 1689930000,
                "temp": 28.3,
                "feels_like": 29.78,
                "pressure": 1014,
                "humidity": 59,
                "dew_point": 19.43,
                "uvi": 0.06,
                "clouds": 84,
                "visibility": 10000,
                "wind_speed": 6.53,
                "wind_deg": 72,
                "wind_gust": 6.39,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "pop": 0.14
              },
              {
                "dt": 1689933600,
                "temp": 27.21,
                "feels_like": 28.68,
                "pressure": 1015,
                "humidity": 64,
                "dew_point": 19.63,
                "uvi": 0,
                "clouds": 70,
                "visibility": 10000,
                "wind_speed": 6.14,
                "wind_deg": 71,
                "wind_gust": 6.59,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "pop": 0.14
              },
              {
                "dt": 1689937200,
                "temp": 26.34,
                "feels_like": 26.34,
                "pressure": 1016,
                "humidity": 68,
                "dew_point": 19.97,
                "uvi": 0,
                "clouds": 56,
                "visibility": 10000,
                "wind_speed": 5.8,
                "wind_deg": 68,
                "wind_gust": 6.73,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                  }
                ],
                "pop": 0.14
              },
              {
                "dt": 1689940800,
                "temp": 25.8,
                "feels_like": 26.29,
                "pressure": 1016,
                "humidity": 71,
                "dew_point": 20.22,
                "uvi": 0,
                "clouds": 49,
                "visibility": 10000,
                "wind_speed": 5.24,
                "wind_deg": 66,
                "wind_gust": 6.38,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                  }
                ],
                "pop": 0.11
              },
              {
                "dt": 1689944400,
                "temp": 25.55,
                "feels_like": 26.07,
                "pressure": 1017,
                "humidity": 73,
                "dew_point": 20.24,
                "uvi": 0,
                "clouds": 14,
                "visibility": 10000,
                "wind_speed": 4.58,
                "wind_deg": 61,
                "wind_gust": 5.68,
                "weather": [
                  {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                  }
                ],
                "pop": 0.04
              },
              {
                "dt": 1689948000,
                "temp": 25.26,
                "feels_like": 25.75,
                "pressure": 1017,
                "humidity": 73,
                "dew_point": 20.22,
                "uvi": 0,
                "clouds": 12,
                "visibility": 10000,
                "wind_speed": 4.06,
                "wind_deg": 56,
                "wind_gust": 4.98,
                "weather": [
                  {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689951600,
                "temp": 25.07,
                "feels_like": 25.56,
                "pressure": 1016,
                "humidity": 74,
                "dew_point": 20.04,
                "uvi": 0,
                "clouds": 9,
                "visibility": 10000,
                "wind_speed": 3.86,
                "wind_deg": 54,
                "wind_gust": 4.72,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689955200,
                "temp": 24.87,
                "feels_like": 25.34,
                "pressure": 1016,
                "humidity": 74,
                "dew_point": 19.92,
                "uvi": 0,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 3.64,
                "wind_deg": 51,
                "wind_gust": 4.55,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689958800,
                "temp": 24.68,
                "feels_like": 25.14,
                "pressure": 1016,
                "humidity": 74,
                "dew_point": 19.73,
                "uvi": 0,
                "clouds": 5,
                "visibility": 10000,
                "wind_speed": 3.43,
                "wind_deg": 49,
                "wind_gust": 4.32,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689962400,
                "temp": 24.53,
                "feels_like": 24.97,
                "pressure": 1016,
                "humidity": 74,
                "dew_point": 19.63,
                "uvi": 0,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 3.81,
                "wind_deg": 54,
                "wind_gust": 4.91,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689966000,
                "temp": 24.41,
                "feels_like": 24.84,
                "pressure": 1016,
                "humidity": 74,
                "dew_point": 19.49,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 3.8,
                "wind_deg": 59,
                "wind_gust": 5.19,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689969600,
                "temp": 24.3,
                "feels_like": 24.72,
                "pressure": 1017,
                "humidity": 74,
                "dew_point": 19.39,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 3.46,
                "wind_deg": 62,
                "wind_gust": 4.88,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              },
              {
                "dt": 1689973200,
                "temp": 24.61,
                "feels_like": 25.01,
                "pressure": 1017,
                "humidity": 72,
                "dew_point": 19.21,
                "uvi": 0.39,
                "clouds": 1,
                "visibility": 10000,
                "wind_speed": 3.39,
                "wind_deg": 61,
                "wind_gust": 4.53,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "pop": 0
              }
            ],
            "daily": [
              {
                "dt": 1689818400,
                "sunrise": 1689795554,
                "sunset": 1689846895,
                "moonrise": 1689802260,
                "moonset": 1689853320,
                "moon_phase": 0.07,
                "summary": "Expect a day of partly cloudy with rain",
                "temp": {
                  "day": 27.5,
                  "min": 25.53,
                  "max": 30.05,
                  "night": 25.53,
                  "eve": 29.39,
                  "morn": 26.94
                },
                "feels_like": {
                  "day": 29.52,
                  "night": 26.04,
                  "eve": 30.9,
                  "morn": 29.17
                },
                "pressure": 1006,
                "humidity": 68,
                "dew_point": 21.07,
                "wind_speed": 6.06,
                "wind_deg": 122,
                "wind_gust": 6.2,
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": 90,
                "pop": 0.57,
                "rain": 0.72,
                "uvi": 8.27
              },
              {
                "dt": 1689904800,
                "sunrise": 1689881996,
                "sunset": 1689933260,
                "moonrise": 1689892200,
                "moonset": 1689941280,
                "moon_phase": 0.1,
                "summary": "There will be clear sky until morning, then partly cloudy",
                "temp": {
                  "day": 28.2,
                  "min": 24.79,
                  "max": 30.92,
                  "night": 25.26,
                  "eve": 29.19,
                  "morn": 24.79
                },
                "feels_like": {
                  "day": 29.75,
                  "night": 25.75,
                  "eve": 30.59,
                  "morn": 25.26
                },
                "pressure": 1013,
                "humidity": 60,
                "dew_point": 19.55,
                "wind_speed": 6.53,
                "wind_deg": 72,
                "wind_gust": 6.77,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": 79,
                "pop": 0.18,
                "uvi": 7.04
              },
              {
                "dt": 1689991200,
                "sunrise": 1689968439,
                "sunset": 1690019624,
                "moonrise": 1689982020,
                "moonset": 1690029120,
                "moon_phase": 0.13,
                "summary": "The day will start with clear sky through the late morning hours, transitioning to partly cloudy",
                "temp": {
                  "day": 29.03,
                  "min": 24.3,
                  "max": 32.86,
                  "night": 27.61,
                  "eve": 30.23,
                  "morn": 24.3
                },
                "feels_like": {
                  "day": 30.08,
                  "night": 29.29,
                  "eve": 31.73,
                  "morn": 24.72
                },
                "pressure": 1017,
                "humidity": 53,
                "dew_point": 18.46,
                "wind_speed": 6.06,
                "wind_deg": 163,
                "wind_gust": 6.96,
                "weather": [
                  {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                  }
                ],
                "clouds": 43,
                "pop": 0,
                "uvi": 9.4
              },
              {
                "dt": 1690077600,
                "sunrise": 1690054883,
                "sunset": 1690105986,
                "moonrise": 1690071840,
                "moonset": 1690116840,
                "moon_phase": 0.16,
                "summary": "Expect a day of partly cloudy with clear spells",
                "temp": {
                  "day": 31.38,
                  "min": 25.35,
                  "max": 33.12,
                  "night": 27.64,
                  "eve": 29.86,
                  "morn": 25.41
                },
                "feels_like": {
                  "day": 32.85,
                  "night": 29.99,
                  "eve": 32.38,
                  "morn": 25.96
                },
                "pressure": 1014,
                "humidity": 48,
                "dew_point": 18.88,
                "wind_speed": 6.52,
                "wind_deg": 181,
                "wind_gust": 6.86,
                "weather": [
                  {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                  }
                ],
                "clouds": 11,
                "pop": 0,
                "uvi": 10.19
              },
              {
                "dt": 1690164000,
                "sunrise": 1690141327,
                "sunset": 1690192347,
                "moonrise": 1690161600,
                "moonset": 1690204620,
                "moon_phase": 0.19,
                "summary": "Expect a day of partly cloudy with clear spells",
                "temp": {
                  "day": 30.79,
                  "min": 25.9,
                  "max": 30.97,
                  "night": 27.19,
                  "eve": 28.68,
                  "morn": 25.9
                },
                "feels_like": {
                  "day": 32.09,
                  "night": 29.86,
                  "eve": 31.71,
                  "morn": 26.53
                },
                "pressure": 1014,
                "humidity": 49,
                "dew_point": 18.22,
                "wind_speed": 8.2,
                "wind_deg": 176,
                "wind_gust": 10.88,
                "weather": [
                  {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                  }
                ],
                "clouds": 4,
                "pop": 0,
                "uvi": 10.33
              },
              {
                "dt": 1690250400,
                "sunrise": 1690227772,
                "sunset": 1690278706,
                "moonrise": 1690251540,
                "moonset": 1690292520,
                "moon_phase": 0.22,
                "summary": "The day will start with clear sky through the late morning hours, transitioning to partly cloudy",
                "temp": {
                  "day": 31.14,
                  "min": 26.78,
                  "max": 31.34,
                  "night": 27.46,
                  "eve": 28.89,
                  "morn": 27.33
                },
                "feels_like": {
                  "day": 34.16,
                  "night": 30.55,
                  "eve": 32.31,
                  "morn": 29.63
                },
                "pressure": 1015,
                "humidity": 56,
                "dew_point": 20.94,
                "wind_speed": 8.61,
                "wind_deg": 184,
                "wind_gust": 10.62,
                "weather": [
                  {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": 83,
                "pop": 0.08,
                "uvi": 11
              },
              {
                "dt": 1690336800,
                "sunrise": 1690314217,
                "sunset": 1690365063,
                "moonrise": 1690341600,
                "moonset": 1690380600,
                "moon_phase": 0.25,
                "summary": "There will be partly cloudy today",
                "temp": {
                  "day": 31.46,
                  "min": 26.64,
                  "max": 31.85,
                  "night": 27.79,
                  "eve": 29.36,
                  "morn": 26.81
                },
                "feels_like": {
                  "day": 35.05,
                  "night": 29.91,
                  "eve": 32,
                  "morn": 29.32
                },
                "pressure": 1015,
                "humidity": 57,
                "dew_point": 21.25,
                "wind_speed": 8.15,
                "wind_deg": 185,
                "wind_gust": 10.2,
                "weather": [
                  {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                  }
                ],
                "clouds": 90,
                "pop": 0.17,
                "uvi": 11
              },
              {
                "dt": 1690423200,
                "sunrise": 1690400662,
                "sunset": 1690451419,
                "moonrise": 1690431900,
                "moonset": 1690468980,
                "moon_phase": 0.29,
                "summary": "Expect a day of partly cloudy with rain",
                "temp": {
                  "day": 26.09,
                  "min": 26.09,
                  "max": 27.15,
                  "night": 26.09,
                  "eve": 26.62,
                  "morn": 26.39
                },
                "feels_like": {
                  "day": 26.09,
                  "night": 26.09,
                  "eve": 26.62,
                  "morn": 26.39
                },
                "pressure": 1016,
                "humidity": 73,
                "dew_point": 20.84,
                "wind_speed": 6.67,
                "wind_deg": 185,
                "wind_gust": 9.35,
                "weather": [
                  {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                  }
                ],
                "clouds": 100,
                "pop": 0.66,
                "rain": 0.65,
                "uvi": 11
              }
            ]
          }`));
    }
    

  
}
