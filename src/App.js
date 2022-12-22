import logo from './logo.svg';
import './App.css';
import SideBar from './components/Common/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <SideBar></SideBar>
    </BrowserRouter>
  );
}

export default App;
