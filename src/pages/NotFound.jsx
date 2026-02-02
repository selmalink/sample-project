import { useParams, Link } from "react-router-dom";
import { MENU } from "../data/menu.js";

export default function MenuItem() {
  const { slug } = useParams();
  const item = MENU.find((x) => x.slug === slug);

  if (!item) {
    return (
      <div>
        <h1>Item not found</h1>
        <Link to="/menu">Back to menu</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.price} dollars</p>
      <p>{item.desc}</p>
      <Link to="/menu">Back to menu</Link>
    </div>
  );
}
