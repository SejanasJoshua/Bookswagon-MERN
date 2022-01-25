import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = ({ categories }) => {
  return (
    <div className="sidebar">
      <h5>Browse by Category</h5>
      <div className="sidebarItems">
        {categories.map((category, index) => (
          <span key={index}>
            <Link to={`/book/?cat=${category.name}`} className="link">
              <li className="sidebarListItem">{category.name}</li>
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
