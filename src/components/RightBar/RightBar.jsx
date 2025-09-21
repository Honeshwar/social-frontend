import "./RightBar.scss";
import { useAuthContextValue } from "../../context/authContext";

export default function RightBar() {
  const { user } = useAuthContextValue();

  return (
    <aside className="rightBar">
      <section className="items">
        <h6>Suggestions For You</h6>
        <div className="contents">
          <div>
            <div className="left">
              <img
                src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                alt="profile pic"
              />
              <span>Nial Haran</span>
            </div>
            <div className="right">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div>
            <div className="left">
              <img
                src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                alt="profile pic"
              />
              <span>Nial Haran</span>
            </div>
            <div className="right">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
      </section>
      <section className="items">
        <h6>Latest Activities</h6>
        <div className="contents">
          <div>
            <div className="left">
              <img
                src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                alt="profile pic"
              />
              <h6>
                {user?.username}
                <span> changed their cover picture</span>
              </h6>
            </div>
            <div className="right">
              <span>1 min ago</span>
            </div>
          </div>
          <div>
            <div className="left">
              <img
                src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                alt="profile pic"
              />
              <h6>
                {user?.username} <span> like a post</span>
              </h6>
            </div>
            <div className="right">
              <span>1 min ago</span>
            </div>
          </div>
          <div>
            <div className="left">
              <img
                src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                alt="profile pic"
              />
              <h6>
                {user?.username} <span> do comment</span>
              </h6>
            </div>
            <div className="right">
              <span>1 min ago</span>
            </div>
          </div>
          <div>
            <div className="left">
              <img
                src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                alt="profile pic"
              />
              <h6>
                {user?.username} <span> post</span>
              </h6>
            </div>
            <div className="right">
              <span>1 min ago</span>
            </div>
          </div>
        </div>
      </section>
      <section className="items">
        <h6>Online Friends</h6>
        <div className="contents">
          <div>
            <div className="left">
              <div className="online">
                <img
                  src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                  alt="profile pic"
                />
              </div>
              <h6>Nial Haran</h6>
            </div>
          </div>
          <div>
            <div className="left">
              <div className="online">
                <img
                  src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                  alt="profile pic"
                />
              </div>
              <h6>Nial Haran</h6>
            </div>
          </div>
          <div>
            <div className="left">
              <div className="online">
                <img
                  src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                  alt="profile pic"
                />
              </div>
              <h6>Nial Haran</h6>
            </div>
          </div>
          <div>
            <div className="left">
              <div className="online">
                <img
                  src="https://cdn.pixabay.com/animation/2022/09/27/07/02/07-02-39-333_512.gif"
                  alt="profile pic"
                />
              </div>
              <h6>Nial Haran</h6>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
}
