import "./styles.css";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen }) => {
  const openClass = isOpen ? "open" : "";

  return (
    <div className={`menu ${openClass}`}>
      <button
        to="/new-email"
        className="pl-2 py-5 pr-5 hover:bg-blue-500 w-full"
      >
        New Email
      </button>
      <Link to="/" className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">
        Inbox
      </Link>
      <p className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">Sent</p>
      <p className="pl-3.5 py-5 pr-5 hover:bg-blue-500 w-full">Deleted</p>
    </div>
  );
};

export default Navbar;
