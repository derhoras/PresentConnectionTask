import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './pages/Home';
import AddPost from './pages/AddPost';
import ViewPost from './pages/ViewPost';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/add" element={<AddPost/>} />
        <Route path="/view/:id" element={<ViewPost/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
    </BrowserRouter>


  );
}

export default App;
