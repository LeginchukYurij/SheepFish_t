import PropTypes from 'prop-types';
import { BsStarFill } from 'react-icons/bs';
import { BiMoneyWithdraw } from 'react-icons/bi';

import TableCell from '@UI/TableCell';
import TableHeadCell from '@UI/TableHeadCell';
import TableHeading from '@UI/TableHeading';
import TableRow from '@UI/TableRow';
import styles from './Table.module.scss';
import { Link } from 'react-router-dom';

import SortNum from '@UI/SortNUM';
import SortAZ from '@UI/SortAZ';
import DeleteBtn from '@UI/DeleteBtn';

const Table = ({
  products,
  limit,
  total,
  currentPage,
  onPageChange,
  handleSortByField,
  sortByField,
  reverse,
  onDelete,
}) => {
  return (
    <>
      <div className={styles.scroll}>
        <table className={styles.table}>
          <TableHeading>
            <TableRow>
              <TableHeadCell>
                ID{' '}
                <SortNum
                  onClick={handleSortByField}
                  field='id'
                  isActive={sortByField === 'id' ? true : false}
                  reverse={reverse}
                />
              </TableHeadCell>
              <TableHeadCell>
                Title{' '}
                <SortAZ
                  onClick={handleSortByField}
                  field='title'
                  isActive={sortByField === 'title' ? true : false}
                  reverse={reverse}
                />
              </TableHeadCell>
              <TableHeadCell>
                Description{' '}
                <SortAZ
                  onClick={handleSortByField}
                  field='description'
                  isActive={sortByField === 'description' ? true : false}
                  reverse={reverse}
                />
              </TableHeadCell>
              <TableHeadCell>
                Price{' '}
                <SortNum
                  onClick={handleSortByField}
                  field='price'
                  isActive={sortByField === 'price' ? true : false}
                  reverse={reverse}
                />
              </TableHeadCell>
              <TableHeadCell>
                Raiting{' '}
                <SortNum
                  onClick={handleSortByField}
                  field='rating'
                  isActive={sortByField === 'rating' ? true : false}
                  reverse={reverse}
                />
              </TableHeadCell>
              <TableHeadCell>
                Stock{' '}
                <SortNum
                  onClick={handleSortByField}
                  field='stock'
                  isActive={sortByField === 'stock' ? true : false}
                  reverse={reverse}
                />
              </TableHeadCell>
              <TableHeadCell>
                Category{' '}
                <SortAZ
                  onClick={handleSortByField}
                  field='category'
                  isActive={sortByField === 'category' ? true : false}
                  reverse={reverse}
                />
              </TableHeadCell>
              <TableHeadCell></TableHeadCell>
            </TableRow>
          </TableHeading>

          <tbody>
            {products.map(
              ({
                id,
                title,
                description,

                price,
                rating,
                stock,
                category,
              }) => (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell>
                    <BiMoneyWithdraw
                      color='green'
                      style={{ marginTop: '-3px' }}
                    />{' '}
                    ${price}
                  </TableCell>
                  <TableCell>
                    <BsStarFill
                      size={20}
                      color='#fdfa66'
                      style={{ marginTop: '-5px' }}
                    />
                    {rating}
                  </TableCell>
                  <TableCell>{stock}</TableCell>
                  <TableCell>
                    <Link to={`/category/${category}`}>{category}</Link>
                  </TableCell>

                  <TableCell>
                    <DeleteBtn
                      onClick={() => {
                        onDelete(id);
                      }}
                    />
                  </TableCell>
                </TableRow>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

Table.propTypes = {
  products: PropTypes.array.isRequired,
  limit: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  skip: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  handleSortByField: PropTypes.func.isRequired,
  sortByField: PropTypes.string.isRequired,
};

export default Table;
