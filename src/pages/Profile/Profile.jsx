import {
  BsFacebook,
  BsGlobe2,
  BsInstagram,
  BsLinkedin,
  BsReddit,
  BsThreeDotsVertical,
  BsTwitter,
} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

import "./Profile.scss";
import Posts from "../../components/Posts/Posts";
import { useAuthContextValue } from "../../context/authContext";

export default function Profile() {
  const { user } = useAuthContextValue();
  return (
    <div className="profile">
      <div className="banner">
        <img
          src="https://cdn.pixabay.com/photo/2023/08/23/13/09/dolomites-8208541_640.jpg"
          alt="banner"
        />
      </div>
      <div className="details">
        <img
          src={
            user?.profilePicture ||
            "https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
          }
          alt="profile"
        />
        <div className="left">
          <BsFacebook />
          <BsInstagram />
          <BsLinkedin />
          <BsTwitter />
          {/* <BsReddit /> */}
        </div>
        <div className="center">
          <h2>Jane Doe</h2>
          <div className="links">
            <a href="//">
              <MdLocationOn /> USA
            </a>
            <a href="//">
              <BsGlobe2 /> jane.dev
            </a>
          </div>
          <button type="button">Follow</button>
        </div>
        <div className="right">
          <AiOutlineMail />
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="userPosts">
        <Posts />
      </div>
    </div>
  );
}
