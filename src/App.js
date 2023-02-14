import { Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/game" element={<Game/>}/>
        

        {/* <Route path="/menu"><Menu/></Route> */}
        </Routes>
    </div>
  );
}

export default App;
