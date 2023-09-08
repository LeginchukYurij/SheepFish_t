import Checkbox from '@UI/Checkbox';
import { useDispatch } from 'react-redux';
import { setTheme } from '@redux/themeSlice';

const ThemeSwitcherContainer = () => {
  const dispatch = useDispatch();

  const handleDarkMode = (bool) => {
    if (bool) {
      dispatch(setTheme('dark'));
      return;
    }

    dispatch(setTheme('light'));
  };

  return (
    <Checkbox
      label={'Dark'}
      onChange={handleDarkMode}
    />
  );
};

export default ThemeSwitcherContainer;
