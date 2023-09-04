import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Categories from './pages/Categories';
import Layout from '@components/Layout';

function App() {
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
      </Routes>
    </Layout>
  );
}

export default App;
