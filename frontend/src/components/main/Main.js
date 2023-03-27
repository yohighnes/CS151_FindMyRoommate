import pic2 from "../../pic/main2.jpg";
import pic1 from "../../pic/main1.jpg";
import './Main.css';

function Main() {

    return (
        <div className="article-container">
          <div className="article">
          <img src={pic2}/>
          </div>
          <div className="article">
            <h3>Find My Roommate</h3>
            <p>Stress-free Finding Your Roommates <br/> Designed to help SJSU students find their roommates</p>
            <img src={pic1} />
          </div>
      </div>

    );
}

export default Main;