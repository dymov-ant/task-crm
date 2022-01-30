import React from "react";
import SearchIcon from "./search.png";
import styles from "./search.module.scss";

function Search() {
  return (
    <div className={styles.search}>
      <input type="text" className={styles.search__input} />
      <button type="button" className={styles.search__btn}>
        <img src={SearchIcon} alt="" />
      </button>
    </div>
  );
}

export default Search;
