import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import FrameComponent from "./FrameComponent";
import styles from "./UpcomingEvents.module.css";

export type UpcomingEventsType = {
  className?: string;
};

const UpcomingEvents: FunctionComponent<UpcomingEventsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.upcomingEvents, className].join(" ")}>
      <div className={styles.eventList}>
        <div className={styles.eventHeader}>
          <h1 className={styles.upcomingEvents1}>Upcoming Events</h1>
          <div className={styles.searchOptions}>
            <div className={styles.searchCategories}>
              <div className={styles.searchTop}>
                <div className={styles.searchTopChild} />
                <div className={styles.weekdays}>Weekdays</div>
                <div className={styles.categoryIcons}>
                  <img className={styles.icon} alt="" src="/vector-3.svg" />
                </div>
              </div>
              <div className={styles.searchTop}>
                <div className={styles.searchTopChild} />
                <div className={styles.eventType}>Event Type</div>
                <div className={styles.categoryIcons}>
                  <img className={styles.icon} alt="" src="/vector-3.svg" />
                </div>
              </div>
              <div className={styles.searchTop2}>
                <div className={styles.searchTopChild} />
                <div className={styles.anyCategory}>Any Category</div>
                <div className={styles.categoryIcons}>
                  <img className={styles.icon} alt="" src="/vector-3.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.eventCards}>
          <div className={styles.cardLayout}>
            <div className={styles.cardImagesParent}>
              <img
                className={styles.cardImagesIcon}
                loading="lazy"
                alt=""
                src="/rectangle-12-1@2x.png"
              />
              <div className={styles.cardDetails}>
                <div className={styles.eventIcons} />
                <div className={styles.eventDates}>
                  <div className={styles.dateLayout}>
                    <div className={styles.monthsRow}>
                      <b className={styles.apr}>APR</b>
                    </div>
                    <div className={styles.separators}>
                      <b className={styles.emptySeparators}>14</b>
                    </div>
                  </div>
                </div>
                <div className={styles.eventTitles}>
                  <b className={styles.jyj2011Jyj}>
                    Wonder Girls 2010 Wonder Girls World Tour San Francisco
                  </b>
                  <div className={styles.wellGetYou}>
                    We’ll get you directly seated and inside for you to enjoy
                    the show.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.imageParent}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/rectangle-12-2@2x.png"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.eventIcons} />
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent}>
                    <div className={styles.augWrapper}>
                      <b className={styles.aug}>AUG</b>
                    </div>
                    <div className={styles.wrapper}>
                      <b className={styles.b}>20</b>
                    </div>
                  </div>
                </div>
                <div className={styles.jyj2011JyjWorldwideConcertParent}>
                  <b className={styles.jyj2011Jyj}>
                    JYJ 2011 JYJ Worldwide Concert Barcelona
                  </b>
                  <div className={styles.wellGetYou}>
                    Directly seated and inside for you to enjoy the show.
                  </div>
                </div>
              </div>
            </div>
            <GroupComponent1 slideContent="/rectangle-12-3@2x.png" />
            <div className={styles.cardImagesParent}>
              <img
                className={styles.cardImagesIcon}
                loading="lazy"
                alt=""
                src="/rectangle-12-4@2x.png"
              />
              <div className={styles.cardDetails}>
                <div className={styles.eventIcons} />
                <div className={styles.eventDates}>
                  <div className={styles.dateLayout}>
                    <div className={styles.monthsRow}>
                      <b className={styles.apr}>APR</b>
                    </div>
                    <div className={styles.separators}>
                      <b className={styles.emptySeparators}>14</b>
                    </div>
                  </div>
                </div>
                <div className={styles.eventTitles}>
                  <b className={styles.wonderGirls20101}>
                    Wonder Girls 2010 Wonder Girls World Tour San Francisco
                  </b>
                  <div className={styles.wellGetYou1}>
                    We’ll get you directly seated and inside for you to enjoy
                    the show.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.imageParent}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/rectangle-12-5@2x.png"
              />
              <div className={styles.rectangleParent}>
                <div className={styles.eventIcons} />
                <div className={styles.frameWrapper}>
                  <div className={styles.frameParent}>
                    <div className={styles.augWrapper}>
                      <b className={styles.aug}>AUG</b>
                    </div>
                    <div className={styles.wrapper}>
                      <b className={styles.b}>20</b>
                    </div>
                  </div>
                </div>
                <div className={styles.jyj2011JyjWorldwideConcertParent}>
                  <b className={styles.wonderGirls20101}>
                    JYJ 2011 JYJ Worldwide Concert Barcelona
                  </b>
                  <div className={styles.wellGetYou1}>
                    Directly seated and inside for you to enjoy the show.
                  </div>
                </div>
              </div>
            </div>
            <GroupComponent1 slideContent="/rectangle-12-6@2x.png" />
          </div>
          <FrameComponent />
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
