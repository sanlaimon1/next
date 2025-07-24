import react from "react";
import styles from './page.module.css';
import Button from "@/components/Button/Button";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" fill={true} alt="" className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit assumenda cum expedita distinctio dicta facilis aliquid laboriosam quidem quod eos, nesciunt recusandae, rem atque aut praesentium harum veniam optio ab!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum! Doloribus, cumque. Quasi, voluptates. Doloremque, asperiores. Doloribus, cumque. Quasi, voluptates. Doloremque, asperiores. Doloribus, cumque. Quasi, voluptates.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit assumenda cum expedita distinctio dicta facilis aliquid laboriosam quidem quod eos, nesciunt recusandae, rem atque aut praesentium harum veniam optio ab!
            <br />
            <br />
            - Dynamic Websites 
            <br />
            <br />
            - Fast and responsive websites that adapt to any device.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}

export default About;