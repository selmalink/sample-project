import { Link } from "react-router-dom";
import "./MenuItemCard.css";

export default function MenuItemCard({ item }) {
  return (
    <div className="menu-card">
      <h3 className="menu-title">{item.name}</h3>
      <p className="menu-price">{item.price} dollars</p>
      <Link to={`/menu/${item.slug}`} className="menu-link">
        View details
      </Link>
    </div>
  );
}

