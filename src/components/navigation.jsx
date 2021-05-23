import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/modules/navigation.module.scss";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div>
        <button
          onClick={() => {
            if (document.body.classList.contains("toggle")) {
              document.body.classList.remove("toggle");
            } else {
              document.body.classList.add("toggle");
            }
          }}
        >
          Toggle Inspect
        </button>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default Navigation;
