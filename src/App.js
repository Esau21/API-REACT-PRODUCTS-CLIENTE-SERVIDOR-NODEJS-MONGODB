import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Products from './components/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Agree from './components/Agree';
import Edit from './components/Edit';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/agree' element={<Agree />} />
          <Route path='/editar/:id' element={<Edit/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
