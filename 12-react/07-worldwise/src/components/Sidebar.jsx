import AppNav from './AppNav';
import Logo from './Logo';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <p> List Of cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Copyrigth {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
