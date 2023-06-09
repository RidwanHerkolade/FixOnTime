import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopApp from './Component/Pages/Shop/ShopApp/ShopApp';
import ServiceApp from './Component/Pages/Service/ServiceApp/ServiceApp';
import AboutApp from './Component/Pages/About/AboutApp/AboutApp';
import Enquiries from './Component/Pages/Shop/ShopHeader/Enquiries';
import Class from './Component/Pages/Class/Class'
import BlogApp from './Component/Pages/Blog/BlogApp/BlogApp';
import BlogIdApp from './Component/Pages/Blog/BlogId/BlogIdApp';
import ContactApp from './Component/Pages/Contact/ContactApp/ContactApp';
import Request from './Component/Pages/Request/Request';
import ShopId from './Component/Pages/Shop/ShopHeader/ShopId';
ReactDOM.render(
  <BrowserRouter>
       <Routes>
           <Route path="/" element={<App />} />
           <Route path="shopapp" element={<ShopApp/>} />
           <Route path="/shopheader/:shopheaderId" element={<ShopId/>}/>
           <Route path='/blogcontent/:blogcontentId' element={<BlogIdApp/> }/>
           <Route path="serviceapp" element={<ServiceApp/>} />
           <Route path="class" element={<Class/>} />
           <Route path="/blogapp/:id" element={<BlogApp/>} />
           <Route path="aboutapp" element={<AboutApp/>} />
           <Route path="contactapp" element={<ContactApp/>} />
           <Route path="request" element={<Request/>} />
           <Route path="enquiries" element={<Enquiries/>} />
  
      </Routes>
  
  </BrowserRouter>,




document.getElementById('root'))
