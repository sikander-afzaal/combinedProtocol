import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Landing/Home";
import Protocol from "./Pages/ProtocolX/Protocol";
import Index from "./Pages/Dashboard/Index";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/Protocol/*" element={<Protocol />} />
        <Route path="/DashLanding/*" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
