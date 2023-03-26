import Posts from "../posts/Posts";
import Stories from "../stories/Stories";
import "./homebar.scss";

const Homebar = () => {
  return (
    <div className="homebar">
      <Stories />
      <Posts />
    </div>
  );
};

export default Homebar;
