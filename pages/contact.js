import { useRef } from "react";
import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3yrjcmd",
        "template_zo0hgyy",
        formRef.current,
        "6RHCVSDLh3hL4aR6r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className={style.container}>
      <Circle
        backgroundColor="green"
        left="-40vh"
        top="-20vh"
        className={style.circle}
      />
      <Circle
        backgroundColor="yellow"
        right="-30vh"
        bottom="-60vh"
        className={style.circle}
      />
      <h1 className={style.title}>Get in Touch</h1>
      <form ref={formRef} onSubmit={handleSubmit} className={style.form}>
        <input
          className={style.inputS}
          type="text"
          placeholder="Name"
          name="user_name"
        />
        <input className={style.inputS} type="text" placeholder="Phone" />
        <input
          className={style.inputL}
          type="text"
          placeholder="Email"
          name="user_email"
        />
        <input
          className={style.inputL}
          type="text"
          placeholder="Subject"
          name="user_subject"
        />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
          name="message"
        />
        <button onClick={refreshPage} className={style.button}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
