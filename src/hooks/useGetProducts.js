import axiosConfig from '@/axiosConfig';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '@redux/productsSlice';

export const useGetProducts = (url) => {
  const dispath = useDispatch();
  const { currentPage } = useSelector((state) => state.products);
  const products = useSelector((state) => state.products.products);

  const fetchProducts = async () => {
    try {
      const res = await axiosConfig.get(url);
      const data = res?.data;

      if (data) {
        dispath(setProducts(data));
      }
    } catch (error) {
      console.log(error.response);

      return error.response;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [currentPage, url]);

  return products;
};
