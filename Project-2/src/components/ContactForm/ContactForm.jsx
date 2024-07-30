import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

const ContactForm = () => {

  const [name, setName] = useState("Example");
  const [email, setEmail] = useState("Example@gmail.com");
  const [text, setText] = useState("Example");

  const onSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setText(e.target[2].value);
  }
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24" />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24" />}
        />
      <form  onSubmit={onSubmit}>
        <div className={styles.form_controller}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name"/>
        </div>

        <div className={styles.form_controller}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="email"/>
        </div>

        <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"/>
        </div>
        <div className={styles.form_btn}>
            <Button text="SUBMIT"/>
        </div>

        <div>
          {
            "Name : " + name + " " +
            "E-mail : " + email + " " +
            "Text : " + text + " "
          }
        </div>
      </form>
      </div>

      <div className={styles.contact_image}>
        <img src="./images/Service 24_7-pana 1.svg" alt="24_7 image" />
      </div>
    </section>
  );
};

export default ContactForm;
