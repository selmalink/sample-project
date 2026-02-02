import { MENU } from "../data/menu.js";
import MenuItemCard from "../components/MenuItemCard.jsx";

export default function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      {MENU.map((item) => (
        <MenuItemCard key={item.slug} item={item} />
      ))}
    </div>
  );
}
