import PropTypes from 'prop-types';
import { setCurrentPage, deleteProduct } from '@redux/productsSlice';
import { useGetProducts } from '@hooks/useGetProducts';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@components/Table';
import { setSorting } from '@redux/sortingSlice';
import axiosConfig from '@/axiosConfig';

const ProductsTableContainer = ({ category }) => {
  const dispatch = useDispatch();
  let sortedProducts = [];

  const { q } = useSelector((state) => state.search);

  const { products, limit, total, currentPage, skip } = useSelector(
    (state) => state.products
  );

  const { sortingBy, reverse } = useSelector((state) => state.sorting);

  const handleSortByField = (field, rev = false) => {
    if (sortingBy === field && reverse === rev) {
      dispatch(setSorting({ sortingBy: 'id', reverse }));
      return;
    }
    dispatch(setSorting({ sortingBy: field, rev }));
  };

  if (products && products.length) {
    if (/[a-zа-яё]/i.test(products[0][sortingBy])) {
      sortedProducts = [...products].sort((a, b) => {
        if (a[sortingBy][0] < b[sortingBy][0]) return -1;
        if (a[sortingBy][0] > b[sortingBy][0]) return 1;
        return 0;
      });
    } else {
      sortedProducts = [...products].sort(
        (a, b) => a[sortingBy] - b[sortingBy]
      );
    }

    if (reverse) {
      sortedProducts = sortedProducts.reverse();
    }
  }

  const handleDeleteProduct = async (id) => {
    dispatch(deleteProduct(id));

    try {
      const res = await axiosConfig.delete(`/products/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const onPageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const getUrl = () => {
    if (q !== '') {
      return `/products/search?q=${q}&limit=${limit}&skip=${skip}`;
    }

    if (q !== '' && category) {
      return `/products/search?q=${q}&limit=${limit}&skip=${skip}&category=${category}`;
    }

    if (category) {
      return `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    }

    return `/products?limit=${limit}&skip=${skip}`;
  };

  useGetProducts(getUrl());

  return (
    <Table
      products={sortedProducts}
      limit={limit}
      total={total}
      currentPage={currentPage}
      skip={skip}
      onPageChange={onPageChange}
      handleSortByField={handleSortByField}
      sortByField={sortingBy}
      reverse={reverse}
      onDelete={handleDeleteProduct}
    />
  );
};

ProductsTableContainer.propTypes = {
  category: PropTypes.string,
};

export default ProductsTableContainer;
