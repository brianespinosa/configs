import styles from './Section.module.scss';
import SectionGroup from './SectionGroup';

const Section = ({ description, href, title }) => (
  <a href={href} className={styles.Section}>
    <section>
      <h3>{title} &rarr;</h3>
      <p>{description}</p>
    </section>
  </a>
);

Section.Group = SectionGroup;

export default Section;
