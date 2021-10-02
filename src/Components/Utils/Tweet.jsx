import React from "react";
import styles from "./Tweet.styles.scss";
import { FaRegComment, FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";

export default function Tweet(props) {
  const data = props.item;
  return (
    <div className={styles.tweet}>
      <img
        className={styles.tweet__icon}
        width={48}
        height={48}
        src={data.ProfileIcon}
        alt={"Icon Image"}
      />
      <div className={styles.tweet__body}>
        <div className={styles.body__optional}>{data.Optional}</div>
        <div className={styles.body__header}>
          <div className={styles.header__info}>
            <span id={styles["AccountName"]}>{data.AccountName}</span>
            <span id={styles["AccountAt"]}>{data.AccountAt}</span>
            <span id={styles["Dash"]}> - </span>
            <span id={styles["AgoTime"]}>{data.AgoTime}</span>
          </div>
          <div className={styles.header__dots}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26.25"
              height="26.25"
              fill="currentColor"
              className="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </div>
        </div>
        <div className={styles.body__description}>
          <span>{data.Description}</span>
        </div>
        {data.Image && (
          <div className={styles.body__img}>
            <img src={data.Image} alt={"Tweet Image"} />
          </div>
        )}
        <div className={styles.reactions}>
          <div id={styles["comments"]} className={styles.wrapper}>
            <div className={styles.icon}>
              <FaRegComment></FaRegComment>
            </div>
            <span>{data.Comments}</span>
          </div>
          <div id={styles["retweets"]} className={styles.wrapper}>
            <div className={styles.icon}>
              <FaRetweet></FaRetweet>
            </div>
            <span>{data.Retweets}</span>
          </div>
          <div id={styles["hearts"]} className={styles.wrapper}>
            <div className={styles.icon}>
              <AiOutlineHeart></AiOutlineHeart>
            </div>
            <span>{data.Hearts}</span>
          </div>
          <div id={styles["upload"]} className={styles.wrapper}>
            <div className={styles.icon}>
              <BsUpload></BsUpload>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
