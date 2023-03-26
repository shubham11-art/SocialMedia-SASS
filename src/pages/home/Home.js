import Homebar from "../../compnents/homeBar/Homebar";
import Leftbar from "../../compnents/leftBar/Leftbar";
import Rightbar from "../../compnents/rightBar/Rightbar";
import Navbar from "../../compnents/navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Leftbar />
        <Homebar />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
