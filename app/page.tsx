import MainInfo from "./components/MainInfo";
import Hourly from "./components/Hourly";
import Daily from "./components/Daily";

export default function Home() {
  return (
    <>
      <MainInfo />
      <div className="mt-14">
        <Hourly />
      </div>
      <div className="my-10">
        <Daily />
      </div>
    </>
  );
}
