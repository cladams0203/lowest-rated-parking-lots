import Card from "./Card";
import "./Home.scss";

export default function Home({ businesses }) {
  return (
    <div className="home-container">
      {businesses.map((biz) => {
        return <Card key={biz.id} biz={biz} />;
      })}
    </div>
  );
}
