import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.progress}></div>
      </div>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};

export default Loader;
