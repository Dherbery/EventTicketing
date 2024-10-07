import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  slideContent?: string;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  slideContent,
}) => {
  return (
    <div className={[styles.slideContentParent, className].join(" ")}>
      <img
        className={styles.slideContentIcon}
        loading="lazy"
        alt=""
        src={slideContent}
      />
      <div className={styles.slideParent}>
        <div className={styles.slide} />
        <div className={styles.frameWrapper}>
          <div className={styles.sepParent}>
            <b className={styles.sep}>SEP</b>
            <div className={styles.wrapper}>
              <b className={styles.b}>18</b>
            </div>
          </div>
        </div>
        <div className={styles.superJuniorSmTownLive10Parent}>
          <b className={styles.superJuniorSm}>
            2011 Super Junior SM Town Live '10 World Tour New York City
          </b>
          <div className={styles.directlySeatedAnd}>
            Directly seated and inside for you to enjoy the show.
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
