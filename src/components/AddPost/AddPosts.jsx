import "./AddPost.scss";
import Image from "../../assets/img.png";
// import Map from "./map.png";
// import Friend from "../../assets/friend.png";
import { useAuthContextValue } from "../../context/authContext";
import { useState } from "react";

const AddPost = () => {
  console.log("images", Map);
  const { user, createPost } = useAuthContextValue();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    console.log("image", image);
    createPost({ description, image });
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
            alt=""
          />
          {/* //user?.profilePic} */}
          <input
            type="text"
            placeholder={`What's on your mind ${user?.username}?`}
          />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{ display: "none" }} />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            {/* <div className="item">
              <img
                src={
                  Map
                }
                alt=""
              />
              <span>Add Place</span>
            </div>
            <div className="item"> 
              <img
                src={
                 friend
                }
                alt=""
              />
              <span>Tag Friends</span>
            </div>
        */}
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
