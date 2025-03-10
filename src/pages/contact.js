import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };
    // if (!name || !email || !phone || !email) {
    //   alert("Please fill in the required fields");
    //   return;
    // }
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:");
        alert("Thanks for contacting us");
        setPhone("");
        setName("");
        setEmail("");
        setDesc("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    } else if (e.target.name == "name") {
      setName(e.target.value);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.p}>Contact Us</p>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className={styles.input}
            id="name"
            name="name"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className={styles.input}
            name="email"
            id="email"
            aria-describedby="emailHelp"
            required
          />
          <div className={styles.formtext} id="emailHelp">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            type="phone"
            value={phone}
            onChange={handleChange}
            className={styles.input}
            name="phone"
            id="phone"
            required
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.formlabel} htmlFor="desc">
            Elaborate your concern
          </label>
          <textarea
            value={desc}
            onChange={handleChange}
            className={styles.input}
            placeholder="Write your concern here"
            name="desc"
            id="desc"
            required
          />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
