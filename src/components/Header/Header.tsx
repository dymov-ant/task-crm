import React from "react";
import { Search } from "../Search";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Search />
    </header>
  );
}

export default Header;
