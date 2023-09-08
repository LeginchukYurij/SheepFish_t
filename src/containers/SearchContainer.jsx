import SearchField from '@UI/SearchField';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/searchSlice';

const SearchContainer = () => {
  const dispatch = useDispatch();

  const handleSearch = (q) => {
    dispatch(setSearch(q));
  };

  return (
    <SearchField
      placeholder='Search by name or keyword'
      onChange={handleSearch}
    />
  );
};

export default SearchContainer;
