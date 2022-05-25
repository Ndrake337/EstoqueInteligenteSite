import './App.css';
import TopBar from './components/TopBar/TopBar';
import Home from './pages/Home/Home';
import CurrentState from './pages/CurrentState/CurrentState';
import AddNewProducts from './pages/AddNewProduct/AddNewProducts';
import {Data} from './backendData'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  console.log(Data.length)
  return (
    <div className='Container'>
    <TopBar />
      <Router>
        <Routes >
          <Route exact path='/' element={<Home />} />
          <Route path='/CurrentState' element={<CurrentState data={Data[2]}/>} />
          <Route path='/AddNewProducts' element={<AddNewProducts />} />
          
        </Routes>

      </Router>
    </div>
  );
}

export default App;
