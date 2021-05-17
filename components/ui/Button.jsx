import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ link, children, clickHandler }) => {
  if (link) {
    return (
      <div className={styles.button}>
        <div className={styles.btn}>
          <Link href={link}>{children}</Link>
        </div>
      </div>
    );
  }

  return (
    <button className={styles.btn} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default Button;
