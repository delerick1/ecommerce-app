import './App.css';
import Home from './pages/Home';
import ProductsDetail from './pages/ProductsDetail';

import Login from './pages/Login';
import Purchases  from './pages/Purchases';

import LoadingScreen from './components/LoadingScreen';
import ProtectedRoutes  from './components/ProtectedRoutes';
import NavBar from './components/NavBar';
import { Container } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
    <NavBar />
    <Container>
    <LoadingScreen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
        </Route>

      </Routes>
    </Container>
  </HashRouter>
  );
}

export default App;
