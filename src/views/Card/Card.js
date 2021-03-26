import "./Card.scss";
import noParking from "../../assets/noParking.jpeg";
export default function Card({ biz }) {
  console.log(biz);
  const { score, image_url, location, name, rating, review_count, url } = biz;

  return (
    <div className="card-container">
      <div className="image">
        <img src={image_url ? image_url : noParking} alt={name} />
      </div>
      <div className="content-container">
        <h3>{name}</h3>
        <p>Score: {score}</p>
        <p>Address: {location.address1} </p>
        <p>Rating: {rating} </p>
        <p>Reviews: {review_count} </p>
        <p>
          <a href={url}>Yelp Link</a>
        </p>
      </div>
    </div>
  );
}
