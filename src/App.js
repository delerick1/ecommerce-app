import './App.css';
import { Home,ProductsDetail, Login,Purchases } from './pages';
import { LoadingScreen, NavBar, ProtectedRoutes } from './components';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { HashRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
    <NavBar />
    <Container>
      { isLoading && <LoadingScreen /> }
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
