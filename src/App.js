import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './layouts/Dashboard';


function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <BrowserRouter>
      <Dashboard/>
      </BrowserRouter>
    </div>
  );
}

export default App;
