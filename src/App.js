import './App.css';
import Header from  './compoonents/header/header.jsx';
import Login from './compoonents/admin/login/login.jsx';
import Store_table from './compoonents/store-table/store-table.jsx';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Login/>
      <Store_table/>
    </BrowserRouter>
  );
}

export default App;
