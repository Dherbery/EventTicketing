import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  rectangle14?: string;
  strategiesToFindYourConferenc?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  rectangle14,
  strategiesToFindYourConferenc,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={rectangle14}
      />
      <h3 className={styles.strategiesToFind}>
        {strategiesToFindYourConferenc}
      </h3>
      <div className={styles.sekarangKamuBisa}>
        Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
        Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.
      </div>
      <div className={styles.marJhon}>12 Mar - Jhon Doe</div>
    </div>
  );
};

export default FrameComponent1;
