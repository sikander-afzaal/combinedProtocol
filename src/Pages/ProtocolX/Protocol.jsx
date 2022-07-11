import { Routes, Route } from "react-router-dom";

import Header from "../../Layout/HeaderProtocol/Header";
import Footer from "../../Layout/FooterProtocol/Footer";
import Home from "./HomePage/Home";
import Trade from "./Trade/Trade";
import Earn from "./Earn/Earn";
import styles from "./Protocol.module.css";

function App() {
  return (
    <div className={styles.Protocol}>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/Trade/*"} element={<Trade />} />
        <Route path={"/Earn/*"} element={<Earn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
