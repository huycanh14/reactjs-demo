import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import ListUser from "./pages/user/Index";
import AddUser from "./pages/user/Add";

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<div>Loading ...</div>}>
          
        </Suspense>
        <div className="wrapper">
          <Header />
          <Nav />
          <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0">Dashboard</h1>
                  </div>
                  {/* /.col */}
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#/">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Dashboard v1</li>
                    </ol>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              <section className="content">
                <div className="container-fluid" >
                  <Routes>
                    <Route path="*" element={<ListUser />} />
                    <Route path="" exact element={<ListUser />} />
                    <Route path="/user/add" exact element={<AddUser />} />
                  </Routes>
                </div>
              </section>
              {/* /.container-fluid */}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
