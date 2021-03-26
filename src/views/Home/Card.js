import "./Card.scss";

export default function Card({ biz }) {
  console.log(biz);
  const { score, image_url, location, name, rating, review_count, url } = biz;

  return (
    <div className="card-container">
      <h3>{name}</h3>
      <div className="image">
        <img src={image_url} alt={name} />
      </div>
      <p>Score: {score}</p>
      <p>Address: {location.address1} </p>
      <p>Rating: {rating} </p>
      <p>Reviews: {review_count} </p>
      <p>
        <a href={url}>Yelp Link</a>
      </p>
    </div>
  );
}
