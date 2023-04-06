import pic2 from "../../pic/main2.jpg";
import pic1 from "../../pic/main1.jpg";
import './Main.css';

function Main() {

  return (
    <div>
      <div className="main-container">
        <div className="main-box">
          <img src={pic2} />
        </div>
        <div className="main-box">
          <img src={pic1} />
        </div>
      </div>
      <p className='header'>Stress-free Finding Your Roommates <br /> Designed to help SJSU students find their roommates</p>
    </div>


  );
}

export default Main;