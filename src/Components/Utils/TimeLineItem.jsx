import React, { useState } from "react";
import styles from "./TimeLineItem.styles.scss";
import { BsFillImageFill } from "react-icons/bs";
import { AiOutlineFileGif, AiFillSchedule } from "react-icons/ai";
import { ImStatsBars } from "react-icons/im";
import { RiEmotionHappyLine } from "react-icons/ri";
import { Button } from "react-bootstrap";

export default function TimeLineItem(props) {
  switch (props.type) {
    case "home":
      return (
        <div className={styles.timeLine__home}>
          <div className={styles.home__text}>
            <span>Inicio</span>
          </div>
          <div className={styles.home__imgWrapper}>
            <div className={styles.home__img}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-stars"
                viewBox="0 0 16 16"
              >
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              </svg>
            </div>
          </div>
        </div>
      );
    case "publish":
      return (
        <div className={styles.timeLine__publish}>
          <div className={styles.publish__logo}>
            <div className={styles.profile__img}>
              <img
                src="../../assets/Honk.png"
                width="48"
                height="48"
                alt="User profile pic"
                className={styles.profile__svg}
                style={{ borderRadius: "9999px" }}
              />
            </div>
          </div>
          <div className={styles.publish__tweet}>
            <span
              data-placeholder={"??Qu?? est?? pasando?"}
              contenteditable="true"
            ></span>
          </div>
          <div className={styles.publish__options}>
            <div className={styles.options__icons}>
              <div className={styles.icon}>
                <BsFillImageFill />
              </div>
              <div className={styles.icon}>
                <AiOutlineFileGif />
              </div>
              <div className={styles.icon}>
                <ImStatsBars style={{ transform: "rotate(90deg)" }} />
              </div>
              <div className={styles.icon}>
                <RiEmotionHappyLine />
              </div>
              <div className={styles.icon}>
                <AiFillSchedule />
              </div>
            </div>
            <div className={styles.publish__tweetButton}>
              <Button variant="primary" className={`${styles.button} disabled`}>
                Twittear
              </Button>
            </div>
          </div>
        </div>
      );
    case "item":
      return "hola";
    default:
      return <h3>Give me a type</h3>;
  }
}
