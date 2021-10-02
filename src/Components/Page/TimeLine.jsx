import React from "react";
import styles from "./TimeLine.styles.scss";
import TimeLineItem from "../Utils/TimeLineItem";
import Tweet from "../Utils/Tweet";
import Tweets from "../Utils/Tweets.js";

export default function TimeLine() {
  return (
    <div id="timeLine" className={styles.timeLine}>
      <TimeLineItem type={"home"} />
      <TimeLineItem type={"publish"} />
      {Tweets.map((item, index) => {
        return <Tweet key={index} item={item}/>;
      })}
    </div>
  );
}
