import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <p className={styles.Ip}>Introduction</p>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, quidem?
        Minus, quas! Earum maxime dignissimos rem quisquam omnis voluptatem ab
        quis. Tempora iure iste asperiores dolores quia eligendi! Doloremque
        repellat repellendus deleniti est. Blanditiis officiis et explicabo
        dicta. Quod, blanditiis at similique enim deserunt labore nisi doloribus
        tempore nihil quam omnis magni ducimus natus sit vel, id reprehenderit
        nam non quo consectetur ipsa molestias nobis.{" "}
      </p>
      <p className={styles.Ip}>Services Offered</p>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, quis.
        Saepe, blanditiis harum cum excepturi maiores atque mollitia quas itaque
        qui, exercitationem id quaerat magnam repellat quia fugiat hic iure sit
        vitae officiis eligendi.
      </p>
      <p>We offer the following services</p>
      <ul className={styles.ul}>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
        <li>Service 1</li>
      </ul>
      <p className={styles.Ip}>Contact us</p>
      <p className={styles.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos et animi
        harum assumenda necessitatibus explicabo nam, corporis deleniti, ab ad
        praesentium blanditiis iste saepe perferendis impedit architecto quia
        cupiditate? Accusantium est in inventore repellendus unde. Dolores
        labore deserunt corrupti fugiat ratione perspiciatis illo optio suscipit
        aliquid cumque nihil soluta earum, assumenda eligendi nulla sed
        molestias unde?
      </p>
    </div>
  );
};

export default About;
