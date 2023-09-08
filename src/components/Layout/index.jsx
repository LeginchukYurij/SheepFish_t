import { useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Layout.module.scss';
import { debounce } from '@utils';
import Sidebar from '../Sidebar';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { isOpen } = useSelector((state) => state.sidebar);

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
    <div
      className={cn({
        [styles['app-layout']]: isOpen,
        [styles['app-layout-2']]: !isOpen,
      })}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
