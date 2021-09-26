import React from "react";
import styles from "./BlockItem.styles.scss";

export default function BlockItem(props) {
  switch (props.type) {
    case "header":
      return (
        <div className={styles.block__header}>
          <h4>{props.header}</h4>
        </div>
      );
    case "item":
      return (
        <div className={styles.block__item}>
          <div className={styles.item__info}>
            <div className={styles.item__info_header}>
              <span>{props.cat}</span>
              {props.time && <span className={styles.point}>-</span>}
              {props.time && <span>{props.time}</span>}
            </div>
            <div className={styles.item__info_title}>
              <span>{props.title}</span>
            </div>
            <div className={styles.item__info_optional}>
              <span>{props.optional}</span>
            </div>
          </div>
          <div className={styles.item__img}></div>
        </div>
      );
    case "showMore":
      return (
        <div className={styles.block__showMore}>
          <span>Mostrar más</span>
        </div>
      );
    default:
      return <h3>Give me a type</h3>;
  }
}
