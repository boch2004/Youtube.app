
import "./App.css";
import Groupe from "./components/Groupe";
import Navebar from "./components/Navebar";
import Video from "./components/Video";


function App() {
 

  return (
    <div className="App">
      <Navebar/>
      <div style={{display:"flex",justifyContent:"space-around",marginTop:"15px"}}>
      <div style={{display:"flex"}}>
      <Video/>
      <Groupe/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
