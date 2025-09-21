import "./LeftBar.scss";
import { Link } from "react-router-dom";
import { useAuthContextValue } from "../../context/authContext";

export default function LeftBar() {
  const { user } = useAuthContextValue();

  return (
    <aside className="leftBar">
      <section>
        <Link to={`/profile/${user?._id}`} className="items">
          <img
            className="profile"
            src={
              user?.profilePicture ||
              "https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
            }
            alt="Profile"
          />
          <span>{user?.username}</span>
        </Link>
        <Link to="/friends" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5189/5189290.png"
            alt="friends icon"
          />
          <span>Friends</span>
        </Link>
        <Link to="/groups" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1921/1921935.png"
            alt="Groups icon"
          />
          <span>Groups</span>
        </Link>
        <Link to="/marketplace" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/10845/10845585.png"
            alt="Marketplace icon"
          />
          <span>Marketplace</span>
        </Link>
        <Link to="/watch" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/12228/12228967.png"
            alt="Watch icon"
          />
          <span>Watch</span>
        </Link>
        <Link to="/memories" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3066/3066491.png"
            alt="Memories icon"
          />
          <span>Memories</span>
        </Link>
      </section>
      <hr />
      <section>
        <h6>Your Shortcuts</h6>
        <Link to="/events" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2794/2794428.png"
            alt="Events icon"
          />
          <span>Events</span>
        </Link>
        <Link to="/gaming" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1374/1374723.png"
            alt="Gaming icon"
          />
          <span>Gaming</span>
        </Link>
        <Link to="/gallery" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11868/11868716.png"
            alt="Gallery icon"
          />
          <span>Gallery</span>
        </Link>
        <Link to="/videos" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1179/1179069.png"
            alt="Videos icon"
          />
          <span>Videos</span>
        </Link>
        <Link to="/messages" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png"
            alt="Messages icon"
          />
          <span>Messages</span>
        </Link>
      </section>
      <hr />
      <section>
        <h6>Others</h6>
        <Link to="/fundraiser" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2037/2037747.png"
            alt="Fundraiser icon"
          />
          <span>Fundraiser</span>
        </Link>
        <Link to="/tutorials" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/7341/7341936.png"
            alt="Tutorials icon"
          />
          <span>Tutorials</span>
        </Link>
        <Link to="/courses" className="items">
          <img
            src="https://cdn-icons-png.flaticon.com/128/4762/4762311.png"
            alt="Courses icon"
          />
          <span>Courses</span>
        </Link>
      </section>
    </aside>
  );
}
