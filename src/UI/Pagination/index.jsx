import styles from './Pagination.module.scss';
import uniqid from 'uniqid';
import cn from 'classnames';
import { usePagination, DOTS } from '@hooks/usePagination';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={cn(styles['pagination-container'], {
        [className]: styles[className],
      })}>
      <li
        key={uniqid()}
        className={cn(styles['pagination-item'], {
          [styles.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}>
        <div className={cn(styles.arrow, styles.left)} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className={cn(styles['pagination-item'], styles.dots)}
              key={uniqid()}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={uniqid()}
            className={cn(styles['pagination-item'], {
              [styles.selected]: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </li>
        );
      })}

      <li
        key={uniqid()}
        className={cn(styles['pagination-item'], {
          [styles.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}>
        <div className={cn(styles.arrow, styles.right)} />
      </li>
    </ul>
  );
};

export default Pagination;
