import styles from "./SideBar.module.css";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

function SideBar() {
  return (
    <div className={styles.sideBar}>
      <div className={styles.sideBarDiv}>
        <p>
          INSTALLATION <AiOutlineArrowUp />
        </p>
        <ul>
          <li className={styles.textBold}>Getting Started</li>
          <li>Add React to a Website</li>
          <li>Create a New React App</li>
          <li>CDN Links</li>
          <li>Release Channels</li>
        </ul>
        <p>
          MAIN CONCEPTS <AiOutlineArrowDown />
        </p>
        <p>
          ADVANCED GUIDES <AiOutlineArrowDown />
        </p>
        <p>
          API REFERENCE <AiOutlineArrowDown />
        </p>
        <p>
          HOOKS <AiOutlineArrowDown />
        </p>
        <p>
          TESTING <AiOutlineArrowDown />
        </p>
        <p>
          CONTRIBUTING <AiOutlineArrowDown />
        </p>
        <p>FAQ</p>
      </div>
    </div>
  );
}

export default SideBar;
