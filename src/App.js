import './App.scss';
import Header from './components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './myRoutes/MyRoutes';
import { Provider } from 'react-redux';
import store from "./Redux/store"
function App() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>
        <Header/>
        <MyRoutes/>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
