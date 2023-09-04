import { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';
import { debounce } from '@utils';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => {
  useEffect(() => {
    const calcHeight = () => {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    const processChange = debounce(calcHeight);

    calcHeight();
    window.addEventListener('resize', processChange);
  }, []);
  return (
    <div className={styles['app-layout']}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
