import logo from './logo.svg';
import './App.css';
import { Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import routes from './route';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="App">
      <h1>Universitas MDP</h1>


      {/*menu*/}
      <ul class="nav nav-tabs" >
        <li class="nav-item me-3">
          <NavLink to={"/"} className={"nav-link"}>
            Home
          </NavLink>
        </li>
        <li class="nav-item me-3">
          <NavLink to={"/fakultas"} className={"nav-link"}>
            Fakultas
          </NavLink>
        </li>
        <li class="nav-item me-3">
          <NavLink to={"/prodi"} className={"nav-link"}>
            Prodi
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to={"#"} className={"nav-link"}>
            Mahasiswa
          </NavLink>
        </li>
      </ul>


      {/* {main konten} */}
      <div className='row'>
        <div className='col'>
          <Routes>
            {routes.map((route,i)=>{
              const {path, Component}=route
              return<Route key={i} path={path} element={<Component/>}/>
            })}
          </Routes>
        </div>
      </div>
    </div>
    </Suspense>
  );
}

export default App;
