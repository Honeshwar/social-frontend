import "./Comments.scss";
import { TfiCommentAlt } from "react-icons/tfi";

export default function Comments({ comments }) {
  return (
    <div className="comments">
      <div className="top">
        <img
          src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
          alt="Commenter"
        />
        <input type="text" placeholder="Write a comment" required />
        <button type="submit">Send</button>
      </div>
      <div className="bottom">
        {comments.map((comment, index) => (
          <div className="comment" key={comment.id}>
            <div className="left">
              <img
                src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                alt="commenter"
              />
            </div>
            <div className="center">
              <h4>{comment.name}</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias consectetur earum quos, nisi a expedita nobis animi
                quam amet, dolore ea. Blanditiis accusamus aliquid dolor unde,
                recusandae inventore dignissimos rerum dolore ipsum eligendi?
              </p>
            </div>
            <div className="right">
              <span>{comment.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
