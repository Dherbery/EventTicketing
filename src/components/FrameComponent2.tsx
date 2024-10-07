import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.eventDetails}>
        <div className={styles.eventInfo}>
          <img
            className={styles.ticket21Icon}
            loading="lazy"
            alt=""
            src="/ticket2-1.svg"
          />
          <div className={styles.eventName}>
            <a className={styles.eventick}>
              <span className={styles.event}>Event</span>
              <span>ick</span>
            </a>
          </div>
        </div>
      </div>
      <nav className={styles.navigation}>
        <div className={styles.navigationLinks}>
          <a className={styles.schedule}>Schedule</a>
        </div>
        <div className={styles.navigationLinks}>
          <a className={styles.speakers}>Speakers</a>
        </div>
        <div className={styles.navigationLinks}>
          <a className={styles.ticket}>Ticket</a>
        </div>
        <div className={styles.navigationLinks3}>
          <a className={styles.contact}>Contact</a>
        </div>
        <div className={styles.loginWrapper}>
          <a className={styles.login}>Login</a>
        </div>
      </nav>
    </header>
  );
};

export default FrameComponent2;
