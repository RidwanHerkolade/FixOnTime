import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopApp from './Component/Pages/Shop/ShopApp/ShopApp';
import ServiceApp from './Component/Pages/Service/ServiceApp/ServiceApp';
import AboutApp from './Component/Pages/About/AboutApp/AboutApp';
import Class from './Component/Pages/Class/Class'
import BlogApp from './Component/Pages/Blog/BlogApp/BlogApp';
import ContactApp from './Component/Pages/Contact/ContactApp/ContactApp';
import Request from './Component/Pages/Request/Request';
ReactDOM.render(
  <BrowserRouter>
       <Routes>
           <Route path="/" element={<App />} />
           <Route path="shopapp" element={<ShopApp/>} />
           <Route path="serviceapp" element={<ServiceApp/>} />
           <Route path="class" element={<Class/>} />
           <Route path="/blogapp/:id" element={<BlogApp/>} />
           <Route path="aboutapp" element={<AboutApp/>} />
           <Route path="contactapp" element={<ContactApp/>} />
           <Route path="request" element={<Request/>} />
  
      </Routes>
  
  </BrowserRouter>,




document.getElementById('root'))
