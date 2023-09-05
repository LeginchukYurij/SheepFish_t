import TableCell from '@UI/TableCell';
import TableHeadCell from '@UI/TableHeadCell';
import TableHeading from '@UI/TableHeading';
import TableRow from '@UI/TableRow';
import styles from './Table.module.scss';

const Table = () => {
  return (
    <table className={styles.table}>
      <TableHeading>
        <TableRow>
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
          <TableHeadCell>Raiting</TableHeadCell>
          <TableHeadCell>Stock</TableHeadCell>
          <TableHeadCell>Category</TableHeadCell>
        </TableRow>
      </TableHeading>

      <tbody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Prd1</TableCell>
          <TableCell>Prd1 bla bla</TableCell>
          <TableCell>12$</TableCell>
          <TableCell>5</TableCell>
          <TableCell>30</TableCell>
          <TableCell>Minitor</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Prd1</TableCell>
          <TableCell>Prd1 bla bla</TableCell>
          <TableCell>12$</TableCell>
          <TableCell>5</TableCell>
          <TableCell>30</TableCell>
          <TableCell>Minitor</TableCell>
        </TableRow>
      </tbody>
    </table>
  );
};

export default Table;
