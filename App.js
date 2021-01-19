import "./App.css";

import FullName from "./component/profile/FullName";
import PhotoProfil from "./component/profile/PhotoProfil";
import Adresse from "./component/profile/Adresse";

function App() {
  return (
    <div className="profil">
      <header className="navbar">
        <h2> ConnectedIn</h2>

        <form>
          <input type="text" className="form-control" placeholder="Search" />

          <button type="submit">Submit</button>
        </form>
        <ul className="liste">
          <li>
            <a href="#">Notifications</a>
          </li>
          <li>
            <a href="#">Profil Setting</a>
          </li>
        </ul>
      </header>
      <div className="between">
        <div className="sidebar sidebar-left">
          <PhotoProfil />
          <FullName />
          <Adresse />
       
        </div>
        <div className="colonne">
        <div className="media">
        <div className="media-left media-top">
          <img
            src="img_avatar1.png"
            className="media-object"
            style={{ width: "60px" }}
          />
        </div>
        <div className="media-body">
          <h4 className="media-heading">Della A. Young</h4>
          <h5>15min ago</h5>
          <p>
            I just completed new quests on Quick Lab This is a good way to learn
            more about the cloud Also I wrote a beginner's article about some
            GCP features
          </p>

          <a href="#">See More</a>
        </div>
      </div>

      <div className="media">
        <div className="media-left media-middle">
          <img
            src="img_avatar1.png"
            className="media-object"
            style={{ width: "60px" }}
          />
        </div>
        <div className="media-body">
          <h4 className="media-heading">Brian L. Johnson</h4> <br />
          <h5>18min ago</h5>
          <p>
            I just completed new quests on Quick Lab This is a good way to learn
            more about the cloud Also I wrote a beginner's article about some
            GCP features
          </p>
          <a href="#">See More</a>
        </div>
      </div>
      <div className="media">
        <div className="media-left media-bottom">
          <img
            src="img_avatar1.png"
            className="media-object"
            style={{ width: "60px" }}
          />
        </div>
        <div className="media-body">
          <h4 className="media-heading">Della A. Young</h4>
          <h5>1h ago</h5>
          <p>
            I just completed new quests on Quick Lab This is a good way to learn
            more about the cloud Also I wrote a beginner's article about some
            GCP features
          </p>

          <a href="#">See More</a>
        </div>
      </div>
      </div>

        
      </div>
    </div>
  );
}

export default App;
