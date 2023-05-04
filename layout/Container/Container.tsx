import styles from "./Container.module.css";

type ContainerProps = {
  children?: any;
};

function Container(props: ContainerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.pageContent}>{props.children}</div>
    </div>
  );
}

export default Container;
