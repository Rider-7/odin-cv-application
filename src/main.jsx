import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';
import FormButton from './FormButton.jsx';
import ProgressBar from './ProgressBar.jsx';
import FormInput from './FormInput.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormInput />
    <ProgressBar />
    <FormButton variant="solid" />
  </React.StrictMode>,
)
