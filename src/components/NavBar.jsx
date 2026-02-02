import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  marginRight: 12,
  textDecoration: "none",
  fontWeight: isActive ? 700 : 400,
});

export default function NavBar() {
  return (
    <nav style={{ marginBottom: 16 }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/menu" style={linkStyle}>Menu</NavLink>
    </nav>
  );
}
