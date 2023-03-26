import "./rightBar.scss";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        {/* .container ha overall Rightbar sathi */}
        <div className="item">
          {/* .item karan same elements(styling) aahet different boxes madhe */}
          <span>Suggestion For You</span>
          <div className="user">
            {/* .user wrapper for userInfo and buttons sathi */}
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            {/* .user wrapper for userInfo and buttons sathi */}
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <span>Jane Doe</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <p>
                <span>Michel Anna</span> changed there cover photo
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <p>
                <span>Michel Anna</span> liked a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <p>
                <span>Michel Anna</span> commented on a post
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <p>
                <span>Michel Anna</span> posted
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="online"></div>
              <span>Erdagul Rafiq</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="online"></div>
              <span>Erdagul Rafiq</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="online"></div>
              <span>Erdagul Rafiq</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="online"></div>
              <span>Erdagul Rafiq</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="online"></div>
              <span>Erdagul Rafiq</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="online"></div>
              <span>Erdagul Rafiq</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="online"></div>
              <span>Erdagul Rafiq</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://picsum.photos/200/300" alt="" />
              <div className="online"></div>
              <span>Erdagul Rafiq</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
