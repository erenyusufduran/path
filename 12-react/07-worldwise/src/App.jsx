import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Homepage, PageNotFound, Pricing, Product } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
