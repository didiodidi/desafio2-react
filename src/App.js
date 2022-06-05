import React,{Component} from "react";
import "./style.css";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return(
      <div>
        <Navigation />
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
