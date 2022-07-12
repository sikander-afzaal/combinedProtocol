import React from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./styles/Win.module.css";
import Lottery from "./Lottery";
function Win() {
  return (
    <div className={styles.win}>
      <Routes>
        <Route path="/Lottery" element={<Lottery />} />
      </Routes>
    </div>
  );
}

export default Win;
