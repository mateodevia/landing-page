import styles from "./SocialMediaIcons.module.css";

const SocialMediaIcons = (props) => (
  <div className={styles.icons_container}>
    {props.icons.map((icon, i) => (
      <a
        key={i}
        href={icon.link}
        className={styles.icon_container}
        target='_blank'
      >
        <img src={icon.icon} className={styles.icon} />
      </a>
    ))}
  </div>
);
export default SocialMediaIcons;
