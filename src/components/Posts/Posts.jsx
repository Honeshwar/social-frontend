import Post from "../Post/Post";
import "./Posts.scss";
import { useAuthContextValue } from "../../context/authContext";

export default function Posts() {
  const { user } = useAuthContextValue();
  const posts = [
    {
      //id,name , profile pic,desc,postimg
      url: "https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_640.jpg",
      name: user?.username,
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/09/24/23/34/woman-1692849_640.jpg",
      name: "Lio keo",
    },
    {
      url: "https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif",
      name: user?.username,
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/05/20/12/45/girl-775349_640.jpg",
      name: "kon Hin",
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/03/03/20/42/man-657869_640.jpg",
      name: "Okay kon",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/11/28/12/39/makeup-2983550_640.jpg",
      name: user?.username,
    },
  ];

  return (
    <div className="story">
      <div className="posts">
        {posts.map((post, ind) => (
          <Post post={post} key={ind} />
        ))}
      </div>
    </div>
  );
}
