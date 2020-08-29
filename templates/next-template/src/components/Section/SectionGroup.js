import styles from './Section.module.scss';

const SectionGroup = ({ children }) => (
  <div className={styles.Group}>{children}</div>
);

export default SectionGroup;
