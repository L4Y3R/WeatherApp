import MainInfo from "./components/MainInfo";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";

import getFormattedData from "./services/weatherService";

export default function Home() {
  const fetchWeather = async () => {
    const data = await getFormattedData({ q: "london" });
    console.log(data);
  };

  fetchWeather();

  return (
    <>
      <MainInfo />
      <div className="mt-14">
        <Hourly title="Hourly Forecast" />
      </div>
      <div className="my-10">
        <Daily title="Daily Forecast" />
      </div>
    </>
  );
}
