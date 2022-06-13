import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import {Purchases,Login,ProductsDetail,Home, Favorites}  from './pages/';
import {NavBar,ProtectedRoutes,LoadingScreen} from './components/';
import { Container } from 'react-bootstrap';
import {useSelector} from'react-redux';


function App() {

const isLoading = useSelector(state => state.isLoading)


  return (
    <HashRouter>
    <NavBar />
    <Container>
   { isLoading && <LoadingScreen />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorite" element={<Favorites/>} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/purchase" element={<Purchases />} />
        </Route>

      </Routes>
    </Container>
  </HashRouter>
  );
}

export default App;
