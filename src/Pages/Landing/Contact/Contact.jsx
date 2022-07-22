import React from "react";
import styles from "./Contact.module.css";
import Button from "../../../Components/Button/Button";
function Contact() {
  return (
    <div className={styles.contactCont}>
      <div className={styles.contact}>
        <h1>Contact Us</h1>
        <form>
          <div className={styles.inputRow}>
            <input type="text" placeholder="FirstName" />
            <input type="text" placeholder="LastName" />
          </div>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Description"></textarea>
          <Button text={"Submit"} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
