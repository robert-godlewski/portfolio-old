// Stylesheets
import './App.css';

// JS Libraries
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// JS Components
import HomeView from './components/HomeView';


function App() {
  const [projectList, setProjectList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomeView 
              projectList={projectList}
              setProjectList={setProjectList}
            />}
          />
          {/*<Route
            path="/:id"
            element={<OneProject 
              projectList={projectList}
              setProjectList={setProjectList}
            />}
            />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
