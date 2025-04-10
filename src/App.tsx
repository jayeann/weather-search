import CardContent from "./components/CardContent";
import "./App.css";
import Greeting from "./components/Greeting";
import Description from "./components/Description";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Greeting text="Weather Explorer" />
        <Description text="Find out the latest weather conditions for your favorite cities" />
        <CardContent />
      </QueryClientProvider>
    </>
  );
}

export default App;
