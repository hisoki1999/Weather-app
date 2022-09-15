import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { WiDayCloudy } from "react-icons/wi";
import { WiRainWind } from "react-icons/wi";
import { WiCloud } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiNightLightning } from "react-icons/wi";
import { WiFog } from "react-icons/wi";
import { WiRaindrop } from "react-icons/wi";

function App() {
  const [searchValue, setsearchValue] = useState("noida");
  const [tempInfo, setTempInfo] = useState("");
  const weatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fe8663ed4433f91747b047b1c3f9f2e1`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        temp,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      let sec = sunset;
      let date = new Date(sec * 1000);
      let timeStr = `${date.getHours}:${date.getMinutes()}`;

      setTempInfo(newWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    weatherInfo();
  }, [searchValue]);

  return (
    <div>
      <div className="main min-h-screen w-full">
        <div className="bgimage">
          <img
            src=" https://images.unsplash.com/photo-1607705037821-360766282118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1237&q=80"
            className="h-full w-full fixed lg:absolute object-cover brightness-75 "
          />
          {tempInfo?.weathermood === "Clouds" && (
            <img
              src="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="h-full w-full object-cover fixed lg:absolute brightness-50"
            />
          )}
          {tempInfo?.weathermood === "Rain" && (
            <img
              src=" https://images.unsplash.com/photo-1530743373890-f3c506b0b5b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1235&q=80"
              className="h-full w-full object-cover fixed lg:absolute brightness-50"
            />
          )}
          {tempInfo?.weathermood === "Clear" && (
            <img
              src="  https://images.unsplash.com/photo-1529126894674-8dd7cb884766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              className="h-full w-full object-cover fixed lg:absolute brightness-40"
            />
          )}
          {tempInfo?.weathermood === "Thunderstorm" && (
            <img
              src="https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
              className="h-full w-full object-cover fixed lg:absolute brightness-40"
            />
          )}
        </div>
        <div className="centermain relative min-h-screen md:h-screen w-full">
          <div className="firstdiv bg-blue-00 h-3/4 lg:h-3/5 md:h-3/5   lg:w-full justify-between flex flex-col">
            <div className="textweather lg:text-4xl font-bold text-white p-6  ">
              <h1>
                Weather App <span className="text-xs opacity-10">(ashujha)</span>
              </h1>
            </div>
            <div className="search pb-2">
              <div className="searchbox">
                <input
                  className="p-2 pl-4 w-80 bg-transparent border-b-2 outline-none text-white text-lg"
                  placeholder="Search location"
                  id="search"
                  value={searchValue}
                  onChange={(e) => setsearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="seconddiv bg-red-00 h-1/4 lg:h-2/5 md:h-2/5 lg:w-full lg:flex md:flex backdrop-blur">
            <div className="places lg:w-1/6 md:w-1/6  bg-yellow-00 text-md lg:text-lg md:text-xl font-bold text-white lg:pl-4 pl-4 lg:space-y-4 md:space-y-14 border-b">
              <div className="" onClick={(e) => setsearchValue("Delhi")}>
                Delhi
              </div>
              <div className="" onClick={(e) => setsearchValue("Mumbai")}>
                Mumbai
              </div>
              <div className="" onClick={(e) => setsearchValue("Sitamarhi")}>
                Sitamarhi
              </div>
              <div className="" onClick={(e) => setsearchValue("Noida")}>
                Noida
              </div>
              <div className="" onClick={(e) => setsearchValue("Jammu")}>
                Jammu
              </div>
              {/* <div className="" onClick={(e) => setsearchValue("Siliguri")}>
                Siliguri
              </div>
              <div className="" onClick={(e) => setsearchValue("Patna")}>
                Patna
              </div> */}
            </div>
            <div className="temp lg:w-1/6 md:w-1/6 bg-yellow-00 flex flex-col justify-center text-center border-r border-b">
              <div className="text-white font-bold text-2xl lg:text-6xl md:text-4xl">
                {tempInfo?.temp}
              </div>
              <div className="place text-white font-bold lg:text-xl">
                {tempInfo?.name}, {tempInfo?.country}
              </div>
              <div className="text-white">
                {new Date().toLocaleDateString()}
              </div>
              <div className="weathericon bg-yellow-00 text-center flex justify-center">
                {tempInfo?.weathermood === "Haze" && (
                  <WiDayCloudy className="text-white text-5xl lg:text-7xl" />
                )}
                {tempInfo?.weathermood === "Rain" && (
                  <WiRainWind className="text-white text-7xl" />
                )}
                {tempInfo?.weathermood === "Clear" && (
                  <WiCloud className="text-white text-7xl" />
                )}
                {tempInfo?.weathermood === "Clouds" && (
                  <WiCloudy className="text-white text-7xl" />
                )}
                {tempInfo?.weathermood === "Thunderstorm" && (
                  <WiNightLightning className="text-white text-7xl" />
                )}
                {tempInfo?.weathermood === "Mist" && (
                  <WiFog className="text-white text-7xl" />
                )}
                {tempInfo?.weathermood === "Drizzle" && (
                  <WiRaindrop className=" text-7xl text-blue-300" />
                )}
              </div>
              <div className="text-white font-bold text-">
                {tempInfo?.weathermood}
              </div>
            </div>
            <div className="mood lg:w-1/6 md:w-1/6 bg-yellow-00 lg:text-2xl md:text-2xl font-bold text-white space-y-1 lg:space-y-7 md:space-y-10 flex flex-col justify-center text-center border-r border-b">
              <div>Mood</div>
              <div> {tempInfo?.weathermood}</div>
            </div>
            <div className="humidity lg:w-1/6 md:w-1/6 bg-gray-00 lg:text-2xl md:text-2xl font-bold text-white space-y-1 lg:space-y-7 md:space-y-10 flex flex-col justify-center text-center border-r border-b">
              <div>Humidity</div>
              <div> {tempInfo?.humidity}</div>
            </div>
            <div className="wind lg:w-1/6 md:w-1/6 bg-gray-00 lg:text-2xl md:text-2xl font-bold text-white space-y-1 lg:space-y-7 md:space-y-10 flex flex-col justify-center text-center border-r border-b">
              <div>Wind</div>
              <div>{tempInfo?.speed}</div>
            </div>
            <div className="sunset lg:w-1/6 md:w-1/6 bg-yellow-00 lg:text-2xl md:text-2xl font-bold text-white space-y-1 lg:space-y-7 md:space-y-10 flex flex-col justify-center text-center border-r border-b">
              <div>Sunset</div>
              <div> {tempInfo?.sunset}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
