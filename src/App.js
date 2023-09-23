import HomeMain from './views/HomeMain';
import DraftMain from './views/DraftMain';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeMain />} />
        <Route path='/draft' element={<DraftMain />} />
      </Routes>
    </>
  );
}

export default App;
