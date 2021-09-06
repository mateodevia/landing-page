import styles from "./SocialMediaIcons.module.css";

const SocialMediaIcons = (props) => (
  <div className={styles.iconsContainer}>
    {props.icons.map((icon, i) => (
      <a
        key={i}
        href={icon.link}
        className={styles.iconContainer}
        target='_blank'
      >
        <img src={icon.icon} className={styles.icon} />
      </a>
    ))}
  </div>
);
export default SocialMediaIcons;
