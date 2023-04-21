import "./App.css";
import CalBody from "./Components/CalBody";
import Heading from "./Components/Heading";

function App() {
  return (
    <div className="App">
      <Heading />
      <div className="calBody">
        <CalBody />
      </div>
    </div>
  );
}

export default App;
