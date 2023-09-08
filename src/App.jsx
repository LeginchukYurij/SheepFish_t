import { Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Layout from '@components/Layout';
import Home from '@pages/Home';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Category from './pages/Category';

function App() {
  const { theme } = useSelector((state) => state.theme);
  const { value } = useSelector((state) => state.modal);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    if (value) {
      document.documentElement.classList.add('noscroll');
    } else {
      document.documentElement.classList.remove('noscroll');
    }
  }, [theme, value]);

  return (
    <Layout>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/categories'
          element={<Categories />}
        />
        <Route
          path='/category/:id'
          element={<Category />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
