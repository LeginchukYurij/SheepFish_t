import ActionsRow from '@components/ActionsRow';
import PageHeading from '@components/PageHeading';
import ProductsTableContainer from '@containers/ProductsTableContainer';
import SearchContainer from '@containers/SearchContainer';
import AddProductModal from '@components/AddProductModal';

const Home = () => {
  return (
    <>
      <AddProductModal />
      <PageHeading title='Products' />
      <ActionsRow>
        <SearchContainer />
      </ActionsRow>
      <ProductsTableContainer />
    </>
  );
};

export default Home;
