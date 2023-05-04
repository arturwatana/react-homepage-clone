import logo from "../../assets/react.svg";
import styles from "./NavBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";

function NavBar() {
  return (
    <div>
      <div className={styles.noLongerUpdated}>
        <p>
          This site is no longer updated. <span>Go to react.dev</span>
        </p>
      </div>
      <div className={styles.navBar}>
        <div className={styles.navItems}>
          <div className={styles.logo}>
            <img src={logo} />
            <a href="/">React</a>
          </div>

          <ul className={styles.navSite}>
            <li>
              <a href="/" className={`${styles.item} ${styles.navBarItem}`}>
                Docs{" "}
              </a>
            </li>
            <li>
              <a href="/" className={`${styles.item} ${styles.navBarItem}`}>
                Tutorial{" "}
              </a>
            </li>
            <li>
              <a href="/" className={`${styles.item} ${styles.navBarItem}`}>
                Blog{" "}
              </a>
            </li>
            <li>
              <a href="/" className={`${styles.item} ${styles.navBarItem}`}>
                Community{" "}
              </a>
            </li>
          </ul>
          <div className={styles.searchInput}>
            <AiOutlineSearch className={styles.searchImg} />
            <input type="text" placeholder={` Search`} />
          </div>
          <div>
            <ul className={styles.navGithub}>
              <li>
                <a href="/" className={styles.item}>
                  v18.2.0{" "}
                </a>
              </li>
              <li>
                <a href="/" className={styles.item}>
                  Languages{" "}
                </a>
              </li>
              <li>
                <a href="/" className={styles.item}>
                  Github{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
