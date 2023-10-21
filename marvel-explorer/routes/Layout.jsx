import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0">
        <ul>
          <li className="home-link" key="home-button">
            <Link className="border border-dotted border-white w-20" to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
