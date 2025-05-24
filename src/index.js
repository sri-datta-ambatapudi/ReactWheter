import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Error from './Error';
import { Toaster } from 'react-hot-toast';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>

    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Header />} />
        <Route path='/App' element={<App />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
