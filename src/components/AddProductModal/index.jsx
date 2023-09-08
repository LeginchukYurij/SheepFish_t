import Modal from '@UI/Modal';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import styles from './AddProductModal.module.scss';
import { useGetCategories } from '@hooks/useGetCategories';
import axiosConfig from '@/axiosConfig';
import uniqid from 'uniqid';
import { addProduct } from '../../redux/productsSlice';
import { hide } from '../../redux/modalSlice';

const AddProductModal = () => {
  const dispatch = useDispatch();
  const { value, type } = useSelector((state) => state.modal);

  const categories = useGetCategories();

  const schema = yup.object().shape({
    title: yup.string().min(3).required(),
    description: yup.string().min(3).required(),
    price: yup.number().required(),
    rating: yup.number().required(),
    stock: yup.number().required(),
    category: yup.string().required().oneOf(categories),
  });

  const handleOnSubmit = (values) => {
    try {
      const id = uniqid();

      const data = {
        id,
        title: values.title,
        description: values.description,
        price: values.price,
        rating: values.rating,
        stock: values.stock,
        category: values.category,
      };

      axiosConfig({
        method: 'post',
        url: '/products/add',
        data,
      });

      dispatch(addProduct(data));
      dispatch(hide());
      formik.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      rating: '',
      stock: '',
      category: '',
    },
    validationSchema: schema,
    onSubmit: handleOnSubmit,
  });

  const setInputValue = useCallback(
    (key, value) =>
      formik.setValues({
        ...formik.values,
        [key]: value,
      }),
    [formik]
  );

  return (
    <Modal
      isActive={type === 'ADD_PRODUCT' ? value : false}
      title='Add new product'>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.field}>
          <input
            placeholder='Product title'
            value={formik.values.title}
            onChange={(e) => setInputValue('title', e.target.value)}
          />
          <small>{formik.errors.title}</small>
        </div>

        <div className={styles.field}>
          <textarea
            placeholder='Product description'
            value={formik.values.description}
            onChange={(e) =>
              setInputValue('description', e.target.value)
            }></textarea>
          <small>{formik.errors.description}</small>
        </div>

        <div className={styles.field}>
          <input
            placeholder='Price'
            type='number'
            value={formik.values.price}
            onChange={(e) => setInputValue('price', e.target.value)}
          />
          <small>{formik.errors.price}</small>
        </div>

        <div className={styles.field}>
          <input
            placeholder='Rating'
            type='number'
            value={formik.values.rating}
            onChange={(e) => setInputValue('rating', e.target.value)}
          />
          <small>{formik.errors.rating}</small>
        </div>

        <div className={styles.field}>
          <input
            placeholder='Stock'
            type='number'
            value={formik.values.stock}
            onChange={(e) => setInputValue('stock', e.target.value)}
          />
          <small>{formik.errors.stock}</small>
        </div>

        <div className={styles.field}>
          <select
            value={formik.values.category}
            onChange={(e) => setInputValue('category', e.target.value)}>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <small>{formik.errors.category}</small>
        </div>

        <button
          className={styles.submit}
          type='submit'
          disabled={!formik.isValid}>
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default AddProductModal;
