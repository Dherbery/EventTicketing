import { FunctionComponent } from "react";
import styles from "./EventSearch.module.css";

export type EventSearchType = {
  className?: string;
};

const EventSearch: FunctionComponent<EventSearchType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.eventSearch, className].join(" ")}>
      <div className={styles.searchBox}>
        <div className={styles.searchBoxChild} />
        <div className={styles.filterLabels}>
          <div className={styles.searchEvent}>Search Event</div>
          <div className={styles.filterOptions}>
            <b className={styles.konserJazz}>Konser Jazz</b>
            <div className={styles.filterDividers} />
          </div>
        </div>
        <div className={styles.filterLabels}>
          <div className={styles.searchEvent}>Place</div>
          <div className={styles.filterOptions}>
            <b className={styles.konserJazz}>Indonesia</b>
            <div className={styles.filterDividers} />
          </div>
        </div>
        <div className={styles.filterLabels}>
          <div className={styles.time}>Time</div>
          <div className={styles.filterOptions}>
            <div className={styles.anyDateParent}>
              <b className={styles.konserJazz}>Any date</b>
              <div className={styles.filterIconWrapper}>
                <img className={styles.filterIcon} alt="" src="/vector-2.svg" />
              </div>
            </div>
            <div className={styles.filterDividers} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSearch;
