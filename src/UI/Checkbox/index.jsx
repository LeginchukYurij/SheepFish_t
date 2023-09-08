import styles from './Checkbox.module.scss';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ label, onChange, val }) => {
  const [value, setValue] = useState(val);

  const handleChange = () => {
    setValue(!value);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);
  return (
    <div className={styles['checkbox-wrapper']}>
      <label>
        <input
          type='checkbox'
          checked={value}
          onChange={handleChange}
        />
        <span>{label}</span>
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  val: PropTypes.bool,
};

export default Checkbox;
