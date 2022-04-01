import styles from './banner.module.css';

const Banner = (props) => {
  return <div className={styles.container}>
          <div className={styles.textcontainer}>
            <h1>
              <span className={styles.title1}>Döner</span>
              <span className={styles.title2}>Kebabs</span>
            </h1>
          </div>
          <p className={styles.subTitle}>Discover your local coffee shops!</p>
          <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button>
        </div>
}

export default Banner;
