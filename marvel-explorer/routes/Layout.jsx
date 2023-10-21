import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="fixed z-10 top-0 left-0">
      <nav className="flex items-center justify-center  bg-red-900 p-2">
        <ul>
          <li className="" key="home-button">
            <Link className="m-2 px-3 py-1 rounded border  border-white text-black text-lg bg-white w-20" to="/">
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
