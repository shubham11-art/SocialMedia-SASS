import "./userprofile.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import MailIcon from "@mui/icons-material/Mail";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Post from "../post/Post";
import Posts from "../posts/Posts";

const Userprofile = () => {
  return (
    <div className="userprofile">
      <div className="imageConatiner">
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="coverPhoto"
        />
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        {/*  profileContainer ha nantar add kelay karan userInfo ya container la padding dyayachi hoti. i.e jashi need arise zali tas add kel*/}
        <div className="userInfo">
          <div className="left">
            <a href="#">
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a href="#">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="#">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="#">
              <TwitterIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Mack Henry</span>
            <div className="info">
              <div className="item">
                <PlaceIcon fontSize="small" />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon fontSize="small" />
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <MailIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Userprofile;
