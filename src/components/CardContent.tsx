import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import WeatherItemInfo from "./WeatherItemInfo";
import { GrPowerReset, GrSearch } from "react-icons/gr";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";
import { TbDroplets } from "react-icons/tb";
interface WeatherData {
  temperature: {
    current: number;
    min: number;
    max: number;
    unit: string;
  };
  humidity: number;
  wind: {
    speed: number;
    direction: string;
    unit: string;
  };
}

interface MockWeatherData {
  [key: string]: WeatherData;
}

const mockWeatherData: MockWeatherData = {
  "New York": {
    temperature: {
      current: 18,
      min: 15,
      max: 21,
      unit: "°C",
    },
    humidity: 65,
    wind: {
      speed: 8,
      direction: "N",
      unit: "km/h",
    },
  },
  London: {
    temperature: {
      current: 25,
      min: 10,
      max: 25,
      unit: "°C",
    },
    humidity: 39,
    wind: {
      speed: 12,
      direction: "N",
      unit: "km/h",
    },
  },
  "Los Angeles": {
    temperature: {
      current: 13,
      min: 8,
      max: 15,
      unit: "°C",
    },
    humidity: 30,
    wind: {
      speed: 10,
      direction: "N",
      unit: "km/h",
    },
  },
};

const CardContent = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [selectedCityData, setSelectedCityData] = useState<WeatherData[]>([]);
  const [previousSearchArr, setPreviousSearchArr] = useState<string[]>([]);
  const [searchInitiated, setSearchInitiated] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  const handleSearch = (item?: string) => {
    const searchText = item || inputSearch;
    if (searchText) {
      console.log(item);
      const data = mockWeatherData[searchText];
      if (data) {
        setSelectedCityData([data]);
      } else {
        setSelectedCityData([]);
      }
    }

    if (searchText && !previousSearchArr.includes(searchText)) {
      setPreviousSearchArr((prev) => [...prev, searchText]);
    }

    setSearchInitiated(true);
  };

  const handleReset = () => {
    setSearchInitiated(false);
    setInputSearch("");
    setSelectedCityData([]);
    setPreviousSearchArr([]);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      buttonRef.current?.click();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    if (value.length > 0) {
      value = value.replace(/\b\w/g, (char) => char.toUpperCase());
    }
    setInputSearch(value);
  };

  const handleClear = () => {
    setPreviousSearchArr([]);
  };

  return (
    <>
      {/* SEARCH and RESET */}
      <div className="flex">
        <input
          ref={inputRef}
          type="text"
          className="flex-1 bg-white rounded-l-lg px-3 py-2 border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          value={inputSearch}
          onChange={handleInputChange}
          placeholder="Search City here..."
          onKeyDown={handleKeyPress}
        />
        <Button
          leftFlat
          ref={buttonRef}
          text="Search"
          handleClick={() => handleSearch()}
          icon={<GrSearch />}
          disabled={!inputSearch.trim()}
        />
        <Button handleClick={() => handleReset()} icon={<GrPowerReset />} />
      </div>

      {/* WEATHER CONTENT */}
      <div
        className={`${
          searchInitiated ? "h-64" : ""
        } flex justify-center items-center`}
      >
        {searchInitiated && selectedCityData.length === 0 ? (
          <p>City not found.</p>
        ) : (
          selectedCityData.map((item, index) => (
            <div key={index} className="flex gap-2">
              <WeatherItemInfo
                name="Feels like"
                unit={item?.temperature.unit}
                value={item?.temperature.current}
                icon={<FaTemperatureHigh size={30} />}
              />
              <WeatherItemInfo
                name="Humidity"
                value={item?.humidity}
                icon={<TbDroplets size={30} />}
              />
              <WeatherItemInfo
                name="Wind"
                value={item?.wind.speed}
                unit={item?.wind.unit}
                icon={<FaWind size={30} />}
              />
            </div>
          ))
        )}
      </div>

      {/* PREVIOUS SEARCH */}
      {previousSearchArr.length > 0 && (
        <div className="w-96">
          <div className="flex justify-between items-center border-solid mb-2">
            <div className="text-sm text-neutral-400 font-medium">
              Previous Searches
            </div>
            <button
              className="transparent-button text-sm text-neutral-400 font-medium hover:text-red-500 cursor-pointer"
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
          <div className="flex flex-wrap">
            {previousSearchArr.map((item) => (
              <Button
                className="mt-2"
                key={item}
                text={item}
                handleClick={() => handleSearch(item)}
                value={item}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CardContent;
