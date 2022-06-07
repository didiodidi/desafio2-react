import React,{Component} from "react";
import "./style.css";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return(
      <div>
        <NavBar />
        <div className="container"> 
              <div className="sitio-aviso">
                <h2>Sitio en construcción....</h2>
              </div>
        </div>
      </div>
    )
  }
}

export default App;
