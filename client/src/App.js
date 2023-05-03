// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AddDistributors from './components/AddDistributors';
// import Edit from './components/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';

// import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    // <div className="App">
   <>
      <Routes>
      <Route exact path="/" element={<Home/>} ></Route>
      <Route exact path="/AddDistributors" element={<AddDistributors/>} ></Route>
      <Route exact path="/Edit/:id" element={<Edit/>} ></Route>
    </Routes>
    </>
    // </div>
  );
}

export default App;
