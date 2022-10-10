import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';

import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import Exparts from './Pages/Home/Exparts/Exparts';

function App() {
  return (
    <div className="App">
        <Header></Header>
      <Routes>   
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/expert' element={<Exparts></Exparts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
