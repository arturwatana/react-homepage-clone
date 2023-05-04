import Container from "../../layout/Container/Container";
import SideBar from "../../layout/sideBar/SideBar";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.displayFlex}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.h1}>Getting Started</h1>
          <div className={styles.redBlock}>
            <div className={styles.boldText}>
              These docs are old and won’t be updated. Go to{" "}
              <span className={styles.highlightedText}>react.dev</span> for the
              new React docs.
            </div>
            <div className={styles.paddingTop}>
              The new{" "}
              <span className={styles.highlightedText}>Quick Start</span>{" "}
              teaches modern React and includes live examples.
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            This page is an overview of the React documentation and related
            resources.
          </p>
          <p>
            <span className={styles.boldText}>React</span> is a JavaScript
            library for building user interfaces. Learn what React is all about
            on <span className={styles.highlightedText}>our homepage</span> or{" "}
            <span className={styles.highlightedText}> in the tutorial.</span>
          </p>
          <hr></hr>
          <ul className={styles.contentUl}>
            <li>
              <a href="/" className={styles.highlightedText}>
                Try React
              </a>
            </li>
            <li>
              <a href="/" className={styles.highlightedText}>
                Learn React
              </a>
            </li>
            <li>
              <a href="/" className={styles.highlightedText}>
                Staying Informed
              </a>
            </li>
            <li>
              <a href="/" className={styles.highlightedText}>
                Versioned Documentation
              </a>
            </li>
            <li>
              <a href="/" className={styles.highlightedText}>
                Something Missing?
              </a>
            </li>
          </ul>
          <hr></hr>
          <h2>Try React</h2>
        </div>
      </Container>
      <SideBar />
    </div>
  );
}

export default Home;
