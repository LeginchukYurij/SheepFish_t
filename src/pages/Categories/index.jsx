import uniqid from 'uniqid';
import SearchField from '@UI/SearchField';
import ActionsRow from '@components/ActionsRow';
import PageHeading from '@components/PageHeading';
import CardsGrid from '@UI/CardsGrid';
import CategoryCard from '@components/CategoryCard';
import { useGetCategories } from '../../hooks/useGetCategories';

const Categories = () => {
  const categories = useGetCategories();
  console.log('1');

  return (
    <>
      <PageHeading title='Categories' />

      <ActionsRow></ActionsRow>

      <CardsGrid>
        {categories.map((category) => (
          <CategoryCard
            key={uniqid()}
            name={category}
            path={`/category/${category}`}
          />
        ))}
      </CardsGrid>
    </>
  );
};

export default Categories;
