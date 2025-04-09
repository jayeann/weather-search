interface WeatherItemInfoProps {
  icon?: React.ReactNode;
  value: number;
  unit?: string;
  name: string;
}
const WeatherItemInfo = ({ icon, value, unit, name }: WeatherItemInfoProps) => {
  return (
    <div className="card flex flex-col justify-center items-center bg-gray-50 rounded-lg">
      {icon}
      <p>{name}</p>
      <p>
        {value} {unit && <span>{unit}</span>}
      </p>
    </div>
  );
};

export default WeatherItemInfo;
