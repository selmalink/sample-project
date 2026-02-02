import { Link } from "react-router-dom";

export default function MenuItemCard({ item }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, marginBottom: 12 }}>
      <h3 style={{ margin: 0 }}>{item.name}</h3>
      <p style={{ margin: "6px 0" }}>{item.price} dollars</p>
      <Link to={`/menu/${item.slug}`}>View details</Link>
    </div>
  );
}
