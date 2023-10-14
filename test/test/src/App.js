import './App.css';
import { Routes, Route } from 'react-router-dom'
import Question1 from './Components/Question1';
import Question2 from './Components/Question2';
import Question3 from './Components/Question3';
import Q4products from './Components/Q4products';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Question1/>} />
      <Route path='/question2' element={<Question2/>} />
      <Route path='/question3' element={<Question3/>} />
      <Route path='/q4products' element={<Q4products/>} />
      </Routes>
    </div>
  );
}



export default App;
