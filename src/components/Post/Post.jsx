import "./Post.scss";
import { TfiCommentAlt } from "react-icons/tfi";
import { BsThreeDots, BsFillShareFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import Comments from "../Comments/Comments.jsx";
import { useAuthContextValue } from "../../context/authContext";

export default function Post({ post }) {
  const [showComments, setShowComments] = useState(false);
  const { user } = useAuthContextValue();
  const comments = [
    {
      id: 1,
      name: user?.username,
      desc: "lorem22",
      time: "1hour ago",
      profilePic: "url",
    },
    {
      id: 2,
      name: "Sam Mendes",
      desc: "lorem22",
      time: "2shour ago",
      profilePic: "url",
    },
  ];
  return (
    <div className="post">
      <div className="top">
        <div className="left">
          <img
            src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
            alt="author"
          />
          <div className="author">
            <h4>{post.name}</h4>
            <span>a few second ago</span>
          </div>
        </div>
        <div className="right">
          <BsThreeDots />
        </div>
      </div>
      <div className="middle">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          facere optio exercitationem, ratione tempora dolore sunt quia, facilis
          laudantium aperiam voluptatum, non numquam ad inventore?
        </p>
        <img src={post.url} alt="" />
      </div>
      <div className="bottom">
        <div className="interaction-btn">
          <AiOutlineHeart />
          {/* <AiFillHeart/>*/} 2 Like
        </div>
        <div
          className="interaction-btn"
          onClick={() => setShowComments((ps) => !ps)}
        >
          <TfiCommentAlt />
          Comments
        </div>
        <div className="interaction-btn">
          <BsFillShareFill />
          Share
        </div>
      </div>
      {showComments && <Comments comments={comments} />}
    </div>
  );
}
