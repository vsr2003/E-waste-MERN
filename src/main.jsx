import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EwasteSubmit from './Pages/EwasteSubmit.jsx';
// import AdminEwasteAdd from './Pages/AdminEwasteAdd.jsx';
import { AppContextProvider } from './Context/AppContext.jsx';
import Map from './Components/Map.jsx';
import AdminHomePage from './Pages/AdminHomePage.jsx';
import Home from './Pages/Home.jsx';
import AppointmentForm from './Components/Appointment.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(

<AppContextProvider>
<BrowserRouter>
<ScrollToTop />
<App />
<ToastContainer position='top-center' />
</BrowserRouter>
</AppContextProvider>

);
