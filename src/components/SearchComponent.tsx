import React, { useState } from "react";

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

const SearchComponent = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [selectedCityData, setSelectedCityData] = useState<WeatherData[]>([]);
  const [previousSearchArr, setPreviousSearchArr] = useState<string[]>([]);
  const [searchInitiated, setSearchInitiated] = useState<boolean>(false);
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

  return (
    <div className="shadow-2xl p-6 rounded-lg">
      <h1 className="font-bold text-xl ">
        &#x1F324; Welcome to Weather Explorer! &#x1F30D;
      </h1>
      <p className="mb-8">
        Find out the latest weather conditions for your favorite cities{" "}
      </p>
      <div className="flex w-full">
        <input
          type="text"
          className="flex-1 bg-white rounded-lg mt-1 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="Search City here..."
        />
        <button onClick={() => handleSearch()}>Search</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>

      <div
        className={`${
          searchInitiated ? "h-64" : ""
        } flex justify-center items-center`}
      >
        {searchInitiated && selectedCityData.length === 0 ? (
          <p>City not found.</p>
        ) : (
          selectedCityData.map((item, index) => (
            <div key={index}>
              <p>
                Temperature: {item?.temperature.current}
                {item?.temperature.unit} {item?.temperature.min}/
                {item?.temperature.max}{" "}
              </p>
              <p>Humidity: {item?.humidity}</p>
              <p>
                Wind Speed: {item?.wind.speed}
                {item?.wind.unit} {item?.wind.direction}
              </p>
            </div>
          ))
        )}
      </div>
      {previousSearchArr.length > 0 && (
        <div>
          Previous Searches:{" "}
          {previousSearchArr.map((item) => (
            <button key={item} onClick={() => handleSearch(item)} value={item}>
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
