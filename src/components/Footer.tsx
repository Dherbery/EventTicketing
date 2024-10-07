import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerChild} />
      <div className={styles.footerContainer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopContent}>
            <img
              className={styles.ticket21Icon}
              loading="lazy"
              alt=""
              src="/ticket2-1.svg"
            />
            <div className={styles.eventickWrapper}>
              <div className={styles.eventick}>
                <span className={styles.event}>Event</span>
                <span>ick</span>
              </div>
            </div>
          </div>
          <div className={styles.eventickIsA}>
            Eventick is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find and attend
            events that fuel their passions and enrich their lives.
          </div>
          <div className={styles.socialLinks}>
            <img
              className={styles.facebookIcon}
              loading="lazy"
              alt=""
              src="/facebook.svg"
            />
            <img
              className={styles.facebookIcon}
              loading="lazy"
              alt=""
              src="/twitter.svg"
            />
            <img
              className={styles.facebookIcon}
              loading="lazy"
              alt=""
              src="/linkedin.svg"
            />
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerNavigation}>
            <div className={styles.navigationLinks}>
              <b className={styles.planEvents}>Plan Events</b>
              <div className={styles.createAndSetContainer}>
                <p className={styles.createAndSet}>Create and Set Up</p>
                <p className={styles.createAndSet}>Sell Tickets</p>
                <p className={styles.createAndSet}>{`Online RSVP `}</p>
                <p className={styles.createAndSet}>Online Events</p>
              </div>
            </div>
            <div className={styles.navigationLinks}>
              <b className={styles.eventick1}>Eventick</b>
              <div className={styles.createAndSetContainer}>
                <p className={styles.createAndSet}>About Us</p>
                <p className={styles.createAndSet}>Press</p>
                <p className={styles.createAndSet}>Contact Us</p>
                <p className={styles.createAndSet}>Help Center</p>
                <p className={styles.createAndSet}>How it Works</p>
                <p className={styles.createAndSet}>Privacy</p>
                <p className={styles.createAndSet}>Terms</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.newsletter}>
          <div className={styles.subscription}>
            <b className={styles.stayInThe}>Stay in the loop</b>
            <div className={styles.joinOurMailing}>
              Join our mailing list to stay in the loop with our newest for
              Event and concert
            </div>
            <div className={styles.fieldEmail}>
              <div className={styles.fieldEmailChild} />
              <div className={styles.inputField}>
                <div className={styles.enterYourEmail}>
                  Enter your email address..
                </div>
              </div>
              <div className={styles.cta}>
                <div className={styles.subscibeNow}>Subscibe Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightBar}>
        <div className={styles.barContent}>
          <div className={styles.barContentChild} />
          <div className={styles.rights}>
            <div className={styles.copyright2022}>
              Copyright © 2022 Avi Yansah
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
