import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import Home from './Pages/Home/Services/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
      <Routes>   
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
