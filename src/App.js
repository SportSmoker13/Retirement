import React  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './component/auth/Register';
import Passive from './component/Passive';
import Retire from './component/Retire';
import Table from './component/Table';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Retire />}>
          <Route path="register" element={<Register />} />
          <Route path="passive" element={<Passive />} />
          <Route path="table" element={<Table />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
