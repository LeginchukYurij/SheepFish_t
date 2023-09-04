import PropTypes from 'prop-types';
import styles from './PageHeading.module.scss';
import Htag from '@UI/Htag';
import ToggleBtn from '@UI/ToggleBtn';
import PlusBtn from '@UI/PlusBtn';

const PageHeading = ({ title }) => {
  return (
    <header className={styles.heading}>
      <div>
        <ToggleBtn title='Toggle menu' />
        <Htag level={1}>{title}</Htag>
      </div>
      <div>
        <PlusBtn title='Add product' />
      </div>
    </header>
  );
};

PageHeading.propTypes = {
  title: PropTypes.string,
};

export default PageHeading;
