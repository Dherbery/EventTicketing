import { FunctionComponent } from "react";
import styles from "./BrandPartners.module.css";

export type BrandPartnersType = {
  className?: string;
};

const BrandPartners: FunctionComponent<BrandPartnersType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.brandPartners, className].join(" ")}>
      <div className={styles.partnerLogos}>
        <div className={styles.logoContainer}>
          <div className={styles.logoGrid}>
            <div className={styles.partnerTitle}>
              <h1 className={styles.joinTheseBrands}>Join these brands</h1>
            </div>
            <div className={styles.weveHadThe}>
              We've had the pleasure of working with industry-defining brands.
              These are just some of them.
            </div>
          </div>
        </div>
        <div className={styles.logoRowWrapper}>
          <div className={styles.logoRow}>
            <img
              className={styles.image4Icon}
              loading="lazy"
              alt=""
              src="/image-4@2x.png"
            />
            <img
              className={styles.image5Icon}
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
            <img
              className={styles.image14Icon}
              loading="lazy"
              alt=""
              src="/image-14@2x.png"
            />
            <img className={styles.image15Icon} alt="" src="/image-15@2x.png" />
            <img
              className={styles.image18Icon}
              loading="lazy"
              alt=""
              src="/image-18@2x.png"
            />
            <img
              className={styles.image16Icon}
              loading="lazy"
              alt=""
              src="/image-16@2x.png"
            />
            <img
              className={styles.image17Icon}
              loading="lazy"
              alt=""
              src="/image-17@2x.png"
            />
            <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
            <img
              className={styles.image20Icon}
              loading="lazy"
              alt=""
              src="/image-20@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
