import { BrowserRouter, Routes, Route, unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeTemplate from './templates/HomeTemplate';
import UserTemplate from './templates/UserTemplate';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Carousel from './components/Carousel';
import './assets/sass/style.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import ProductDetail from './utils/ProductDetail';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import HistoryList from './components/HistoryList';
import Favourite from './components/Favourite';
import ProfileDetail from './components/ProfileDetail';
import UpdateUser from './components/UpdateUser';
import Search from './Pages/Search';
import Cart from './components/Cart';

export const history = createBrowserHistory()
function App() {

  return (
    <Provider store={store}>
      <HistoryRouter history={history}>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route path='cart' element={<Cart/>}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='register' element={<Register />}></Route>
            <Route path='' element={<Home />}>
              <Route index element={<Carousel />}></Route>
              <Route path='detail'>
                <Route path=':id' element={<ProductDetail />}></Route>
              </Route>
            </Route>
            <Route path='profile' element={<Profile />}>
              <Route path='' element={<ProfileDetail />}>
                <Route path='' element={<HistoryList />}></Route>
                <Route path='favourite' element={<Favourite />}></Route>
              </Route>
              <Route path='update' element={<UpdateUser />}></Route>
            </Route>
            <Route path='search' element={<Search />}></Route>
          </Route>
          <Route path='user' element={<UserTemplate />}>
          </Route>
          <Route path='admin' element>
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  )
}

export default App
