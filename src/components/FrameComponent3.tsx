import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.blogPostsWrapper, className].join(" ")}>
      <div className={styles.blogPosts}>
        <div className={styles.content}>
          <div className={styles.frameParent}>
            <div className={styles.blogWrapper}>
              <h1 className={styles.blog}>Blog</h1>
            </div>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          </div>
        </div>
        <div className={styles.blogPosts1}>
          <FrameComponent1
            rectangle14="/rectangle-14@2x.png"
            strategiesToFindYourConferenc="6 Strategies to Find Your Conference Keynote and Other Speakers"
          />
          <FrameComponent1
            rectangle14="/rectangle-14-1@2x.png"
            strategiesToFindYourConferenc="How Successfully Used Paid Marketing to Drive Incremental Ticket Sales"
          />
          <FrameComponent1
            rectangle14="/rectangle-14-2@2x.png"
            strategiesToFindYourConferenc="Introducing Workspaces: Work smarter, not harder with new navigation"
          />
        </div>
        <FrameComponent propAlignSelf="stretch" />
      </div>
    </section>
  );
};

export default FrameComponent3;
