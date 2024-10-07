import { FunctionComponent } from "react";
import FrameComponent2 from "../components/FrameComponent2";
import HeroImage from "../components/HeroImage";
import EventSearch from "../components/EventSearch";
import UpcomingEvents from "../components/UpcomingEvents";
import CreateEvent from "../components/CreateEvent";
import BrandPartners from "../components/BrandPartners";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import styles from "./EventTicketing.module.css";

const EventTicketing: FunctionComponent = () => {
  return (
    <div className={styles.eventTicketing}>
      <section className={styles.eventPage}>
        <div className={styles.firstFold}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-12@2x.png"
            />
            <div className={styles.frameItem} />
          </div>
          <FrameComponent2 />
          <HeroImage />
        </div>
        <EventSearch />
      </section>
      <UpcomingEvents />
      <CreateEvent />
      <BrandPartners />
      <FrameComponent3 />
      <Footer />
    </div>
  );
};

export default EventTicketing;
