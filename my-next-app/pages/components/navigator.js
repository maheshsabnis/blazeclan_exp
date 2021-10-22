import React from "react";
import Link from "next/link";
import styles from "./../../styles/Home.module.css";
const Navigator = () => {
  return (
    <div className={styles.contianer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>
              <Link href="/">
                <a>Index</a>
              </Link>
            </th>
            <th  className={styles.th}>
              <Link href="/components/firstComponent">
                <a>First Component</a>
              </Link>
            </th>
            <th  className={styles.th}>
              <Link href="/components/callAjax">
                <a>Ajax Call</a>
              </Link>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Navigator;
