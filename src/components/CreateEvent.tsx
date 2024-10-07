import { FunctionComponent } from "react";
import styles from "./CreateEvent.module.css";

export type CreateEventType = {
  className?: string;
};

const CreateEvent: FunctionComponent<CreateEventType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.createEvent, className].join(" ")}>
      <div className={styles.eventCreation}>
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <div className={styles.creationDetails}>
          <div className={styles.creationDetailsChild} />
          <h1 className={styles.makeYourOwn}>{`Make your own Event `}</h1>
          <div className={styles.eventDescription}>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <b className={styles.createEvents}>Create Events</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateEvent;
