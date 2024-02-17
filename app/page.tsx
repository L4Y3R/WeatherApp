import MainInfo from "./components/MainInfo";
import Hourly from "./components/Hourly";

export default function Home() {
  return (
    <>
      <MainInfo />
      <div className="mt-10">
        <Hourly />
      </div>
    </>
  );
}
