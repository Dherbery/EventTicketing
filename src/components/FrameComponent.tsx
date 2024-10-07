import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className={[styles.eventCardsInner, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.loadMore}>Load More</b>
      </div>
    </div>
  );
};

export default FrameComponent;
