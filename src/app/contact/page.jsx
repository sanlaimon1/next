import react from "react";
import styles from './page.module.css';
import Button from "@/components/Button/Button";
import Image from "next/image";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let's Keep in Touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" fill={true} alt="" className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="name" className={styles.input} />
          <textarea className={styles.textArea} cols="30" rows="10" placeholder="message"></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;