import CardContent from "./components/CardContent";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="font-bold text-xl ">
        &#x1F324; Welcome to Weather Explorer! &#x1F30D;
      </h1>
      <p className="mb-8">
        Find out the latest weather conditions for your favorite cities{" "}
      </p>
      <div className="card shadow-2xl p-6 rounded-lg bg-white max-w-full">
        <CardContent />
      </div>
    </>
  );
}

export default App;
