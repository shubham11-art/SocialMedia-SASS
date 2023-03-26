import Leftbar from "../../compnents/leftBar/Leftbar";
import Navbar from "../../compnents/navbar/Navbar";
import Rightbar from "../../compnents/rightBar/Rightbar";
import Userprofile from "../../compnents/userprofile/Userprofile";
import "./profile.scss";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile">
        <Leftbar />
        <Userprofile />
        <Rightbar />
      </div>
    </>
  );
};

export default Profile;
