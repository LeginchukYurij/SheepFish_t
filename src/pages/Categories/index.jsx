import SearchField from '@UI/SearchField';
import ActionsRow from '@components/ActionsRow';
import PageHeading from '@components/PageHeading';
import CardsGrid from '@UI/CardsGrid';
import CategoryCard from '@components/CategoryCard';

const Categories = () => {
  return (
    <>
      <PageHeading title='Categories' />

      <ActionsRow>
        <SearchField placeholder='Search by category name' />
      </ActionsRow>

      <CardsGrid>
        <CategoryCard
          name='Cat 1'
          path='/cat1'
        />
        <CategoryCard
          name='Cat 1'
          path='/cat1'
        />
        <CategoryCard
          name='Cat 1'
          path='/cat1'
        />
      </CardsGrid>
    </>
  );
};

export default Categories;
