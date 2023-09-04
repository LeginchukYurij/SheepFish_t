import uniqid from 'uniqid';
import styles from './Sidebar.module.scss';
import logoLight from '@img/logo-light.png';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const routes = [
    {
      path: '/',
      name: 'Products',
    },
    {
      path: '/categories',
      name: 'Categories',
    },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img
          src={logoLight}
          alt='Logo'
        />
      </div>

      <nav className={styles.nav}>
        <ul>
          {routes.map(({ path, name }) => (
            <li key={uniqid()}>
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? styles.active : ''
                }>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
