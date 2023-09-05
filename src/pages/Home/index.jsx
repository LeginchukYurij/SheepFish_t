import SearchField from '@UI/SearchField';
import ActionsRow from '@components/ActionsRow';
import PageHeading from '@components/PageHeading';
import Table from '@components/Table';

const Home = () => {
  return (
    <>
      <PageHeading title='Home' />
      <ActionsRow>
        <SearchField placeholder='Search by name or keyword' />
      </ActionsRow>
      <Table />
    </>
  );
};

export default Home;
