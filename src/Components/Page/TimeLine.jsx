import React from "react";
import styles from "./TimeLine.styles.scss";
import TimeLineItem from "../Utils/TimeLineItem";

export default function TimeLine() {
  return (
    <div id="timeLine" className={styles.timeLine}>
      <TimeLineItem type={"home"} />
      <TimeLineItem type={"publish"} />
    </div>
  );
}
