import React from "react";

type GreetingProps = {
  text?: string;
};

const Greeting = ({ text }: GreetingProps) => {
  return (
    <h1 className="font-bold text-xl ">
      &#x1F324; Welcome to {text ? text : "the Weather App"}! &#x1F30D;
    </h1>
  );
};

export default Greeting;
