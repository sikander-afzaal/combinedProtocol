import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Landing/Home";
import Protocol from "./Pages/ProtocolX/Protocol";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Protocol/*" element={<Protocol />} />
      </Routes>
    </div>
  );
}

export default App;
