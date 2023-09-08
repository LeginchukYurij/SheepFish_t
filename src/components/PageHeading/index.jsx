import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './PageHeading.module.scss';
import Htag from '@UI/Htag';
import ToggleBtn from '@components/ToggleBtn';
import PlusBtn from '@UI/PlusBtn';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { show } from '@redux/modalSlice';

const PageHeading = ({ title }) => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleModal = () => {
    dispatch(show('ADD_PRODUCT'));
  };

  useEffect(() => {
    const checkISScrolled = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        return;
      }

      setIsScrolled(false);
    };

    window.addEventListener('load', checkISScrolled);
    window.addEventListener('scroll', checkISScrolled);
  }, []);

  return (
    <header className={cn(styles.heading, { [styles.sticky]: isScrolled })}>
      <div>
        <ToggleBtn title='Toggle menu' />
        <Htag level={1}>{title}</Htag>
      </div>
      <div>
        <PlusBtn
          title='Add product'
          onClick={handleModal}
        />
      </div>
    </header>
  );
};

PageHeading.propTypes = {
  title: PropTypes.string,
};

export default PageHeading;
