import ActionsRow from '@components/ActionsRow';
import PageHeading from '@components/PageHeading';
import ProductsTableContainer from '@containers/ProductsTableContainer';
import SearchContainer from '@containers/SearchContainer';
import AddProductModal from '@components/AddProductModal';
import { useParams } from 'react-router-dom';

const Category = () => {
  let { id } = useParams();

  return (
    <>
      <AddProductModal />
      <PageHeading title={id} />
      <ActionsRow>
        <SearchContainer />
      </ActionsRow>
      <ProductsTableContainer category={id} />
    </>
  );
};

export default Category;
