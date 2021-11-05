
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ListUser from './pages/user';
import AddUser from './pages/user/add';

function App() {
  return (
    <Router>
      <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <Routes>
          <Route path="*" element={<ListUser />} />
          <Route path="" exact element={<ListUser />} />
          <Route path="/user/add" exact element={<AddUser />} />
        </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
