import "./leftBar.scss";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="https://picsum.photos/200/300" alt="" />
            <span>Jhon Doe</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Friends</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Groups</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Watch</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          {/* menu cha div ka create kelay karan, aaplyala heading(span) and item(icon, name) ashe don element handle karayache aahet => Multiple elements aale ki div madhe wrap karayache. */}
          <span>Your Shortcuts</span>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Events</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Gaming</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Gallary</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Videos</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span> Courses</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span> Courses</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span> Courses</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span> Courses</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span> Courses</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span> Courses</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span> Courses</span>
          </div>
          <div className="item">
            <BeachAccessOutlinedIcon />
            <span> Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
