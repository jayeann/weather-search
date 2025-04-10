import React from "react";

type DescriptionProps = {
  text: string;
};
const Description = ({ text }: DescriptionProps) => {
  return <p className="mb-8">{text}</p>;
};

export default Description;
