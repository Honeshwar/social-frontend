import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsMoon, BsSun, BsSearch } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useDarkModeContextValue } from "../../context/darkModeContext";
import { useAuthContextValue } from "../../context/authContext";

export default function Navbar() {
  const { isDarkMode, toogleIsDarkMode } = useDarkModeContextValue(); //contextValue
  const { user, handleLogout } = useAuthContextValue();

  return (
    <div className="navbar">
      <div className="left">
        <h1>Social</h1>
        <div className="icons">
          <Link to="/" className="items">
            <AiOutlineHome />
          </Link>
          {isDarkMode ? (
            <BsSun onClick={toogleIsDarkMode} />
          ) : (
            <BsMoon onClick={toogleIsDarkMode} />
          )}

          {/* <BiCategory /> */}
          {/* <div className="searchBox">
            <div className="searchIcon">
              <BsSearch className="searchIcon" />
            </div>
            <input type="search" placeholder="Search" />
          </div> */}
        </div>
      </div>
      <div className="right">
        <Link to={`/profile/${user?._id}`} className="user">
          <AiOutlineUser />
        </Link>
        {/* <AiOutlineMail />
        <IoMdNotificationsOutline /> */}
        {/* <Link to={`/profile/${user?._id}`} className="user">
          <img
            src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
            alt="Profile"
          />
          <span>{user?.username}</span>
        </Link> */}
        <p onClick={handleLogout}>Sign out</p>
      </div>
    </div>
  );
}
