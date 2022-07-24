import { Routes, Route } from "react-router-dom";

import Header from "../../Layout/HeaderProtocol/Header";
import Trade from "./Trade/Trade";
import Earn from "./Earn/Earn";
import styles from "./Protocol.module.css";
import Win from "./Win/Win";

function App() {
  return (
    <div className={styles.Protocol}>
      <Header />
      <Routes>
        <Route path={"/Trade/*"} element={<Trade />} />
        <Route path={"/Earn/*"} element={<Earn />} />
        <Route path={"/Win/*"} element={<Win />} />
      </Routes>
    </div>
  );
}

export default App;
