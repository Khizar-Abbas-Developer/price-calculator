import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed left-0 right-0 w-full h-[70px] justify-center gap-8 items-center bg-gray-800 text-white p-4">
        <Link className="text-xl" to="/">
          Home
        </Link>
        <Link className="text-xl" to="/about">
          About
        </Link>
        <Link className="text-xl" to="/services">
          Services
        </Link>
      </div>
    </>
  );
};

export default Header;
