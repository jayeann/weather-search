# Weather App 🌦️

A simple and interactive weather app that allows users to check the current weather and forecasts for their favorite cities. It provides temperature, humidity, wind speed.

## Demo 🎬

[Live Demo](#) _(Link to your live app)_

## Features ✨

- **Current Weather**: Display the current temperature, humidity, wind speed.
- **Search Cities**: Type any city to get weather updates.
- **Responsive Layout**: Optimized for desktop and mobile devices.
- **Previous Searches**: Show your previous searches for quick access to their weather.

## Screenshots 📸

_Example of the weather screen_

## Technologies Used 🛠️

- **React**: The core front-end framework for building the app's user interface.
- **TailwindCSS**: For fast, responsive styling.

## Setup & Installation 🚀

To run this project locally:

1. **Clone this repository:**

   ```bash
   git clone https://github.com/jayeann/weather-search.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd weather-search
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the app locally:**

   ```bash
   npm start
   ```

   This will start the app in development mode and open it in your browser at http://localhost:5173.

## Usage 💡

1. Enter the name of a city into the search bar.

2. Press the "Search" button or hit Enter.

3. The app will fetch and display the current weather for the city.

4. You can reset and turn back to the initial state just by clicking the reset button.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
