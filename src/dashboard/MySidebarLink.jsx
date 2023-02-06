import { Link } from "react-router-dom";

function MySidebarLink({ children, goingTo }) {
  return (
    <>
      <li className="nav-item">
        <Link className="nav-link collapsed" to={goingTo}>
          <i className="bx bi-card-heading"></i>
          <span>{children}</span>
        </Link>
      </li>
    </>
  );
}

export default MySidebarLink;
