import uniqid from 'uniqid';
import cn from 'classnames';
import styles from './Sidebar.module.scss';
import logoLight from '@img/logo-light.png';
import logoDark from '@img/logo-dark.png';
import { NavLink } from 'react-router-dom';
import ThemeSwitcherContainer from '../../containers/ThemeSwitcherContainer';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { isOpen } = useSelector((state) => state.sidebar);

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
    isOpen && (
      <aside className={cn(styles.sidebar, styles.active)}>
        <div className={styles.sticky}>
          <div className={styles.flex}>
            <div className={styles.logo}>
              <img
                src={theme === 'light' ? logoLight : logoDark}
                alt='Logo'
              />
            </div>

            <ThemeSwitcherContainer />
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
        </div>
      </aside>
    )
  );
};

export default Sidebar;
