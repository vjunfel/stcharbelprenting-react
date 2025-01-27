import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
// import AuthLayout from './layouts/AuthLayout';
import Home from './pages/Home';
import About from './pages/About';
// import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/Error404';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
