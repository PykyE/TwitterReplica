import React from "react";
import styles from "./Block.styles.scss";
import BlockItem from "./BlockItem";

export default function Block(props) {
  return (
    <div className={styles.block}>
      <BlockItem type={"header"} header={props.header} />
      <div className={styles.block__items}>{props.children}</div>
      <BlockItem type={"showMore"} />
    </div>
  );
}
