import { FunctionComponent } from "react";
import styles from "./HeroImage.module.css";

export type HeroImageType = {
  className?: string;
};

const HeroImage: FunctionComponent<HeroImageType> = ({ className = "" }) => {
  return (
    <div className={[styles.heroImage, className].join(" ")}>
      <div className={styles.imageContainer}>
        <div className={styles.imageContainerInner}>
          <div className={styles.imageParent}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.news} />
            <img
              className={styles.pngguru2Icon}
              alt=""
              src="/pngguru-2@2x.png"
            />
          </div>
        </div>
        <div className={styles.ticketPackage}>
          <div className={styles.packageDetails}>
            <div className={styles.packageTitle}>
              <div className={styles.sbsMtvTheKpopShowTicketPWrapper}>
                <h1 className={styles.sbsMtvThe}>
                  SBS MTV The Kpop Show Ticket Package
                </h1>
              </div>
              <div className={styles.lookNoFurtherOurSbsTheSWrapper}>
                <div className={styles.lookNoFurther}>
                  Look no further! Our SBS The Show tickets are the simplest way
                  for you to experience a live Kpop recording.
                </div>
              </div>
              <div className={styles.actionButtons}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <b className={styles.getTicket}>Get Ticket</b>
                </div>
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameItem} />
                  <b className={styles.learnMore}>Learn More</b>
                </div>
              </div>
            </div>
            <div className={styles.vectorWrapper}>
              <img
                className={styles.vectorIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
