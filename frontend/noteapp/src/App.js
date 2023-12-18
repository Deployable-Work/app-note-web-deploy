
import { useState } from 'react';
import Nav from './components/nav';
import Nf from './components/notfound';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Buttonnav from './components/buttonnav';
import Header from './components/header';
import Notecontainer from './components/notecontainer';
import Archcontainer from './components/archcontainer';
import Recicle from './components/recicle';
import Createnote from './components/createnote';
import Updatenote from './components/updatenote';

function App() {

  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <BrowserRouter>
      <Buttonnav onClick={toggleNav} displace={navVisible}/>
      <Nav visible={navVisible} />
      <Header />
      <Routes>
        <Route path='/' element={<Notecontainer />}/>
        <Route path='/archived' element={<Archcontainer />}/>
        <Route path='/recicle' element={<Recicle/>}/>
        <Route path='/create-note' element={<Createnote />}/>
        <Route path='/update-note/:id/:titleparam/:textparam/:isArchived' element={<Updatenote />} />
        <Route path='*' element={<Nf/>}/> 
      </Routes>        
    </BrowserRouter>
  );
}

export default App;
