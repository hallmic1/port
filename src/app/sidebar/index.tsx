import styles from './styles.module.scss'
import Applications, {Application} from "@/app/applications";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__header}>
        Michael Hall
      </div>
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__content__nav}>
          {Applications.map((application: Application) => (
            <Link className={styles.sidebar__content__nav__item} href={application.href} key={application.name}>
              {application.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar