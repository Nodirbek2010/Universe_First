import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from './Redux/store/store';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </React.StrictMode>
  </div>
);

