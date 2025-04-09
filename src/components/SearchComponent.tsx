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
  };

  return (
    <div className="shadow-2xl p-6 rounded-lg">
      <input
        type="text"
        className="w-1/2 bg-white rounded-lg mt-1 px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder="Search City here..."
      />
      <button onClick={() => handleSearch()}>Search</button>

      <div className="h-64 flex justify-center items-center">
        {selectedCityData.length === 0 ? (
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
      <div>
        Previous Searches:{" "}
        {previousSearchArr.map((item) => (
          <button key={item} onClick={() => handleSearch(item)} value={item}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
