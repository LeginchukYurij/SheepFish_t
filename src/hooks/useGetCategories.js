import axiosConfig from '@/axiosConfig';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '@redux/categoriesSlice';

export const useGetCategories = () => {
  const dispath = useDispatch();
  const categories = useSelector((state) => state.categories);

  const fetchCategories = async () => {
    try {
      const res = await axiosConfig.get(`/products/categories`);
      const data = res?.data;

      if (data) {
        dispath(setCategories(data));
      }
    } catch (error) {
      console.log(error.response);

      return error.response;
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return categories.categories;
};
