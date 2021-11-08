import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User_Image" />
            </div>
            <div className="info">
              <Link to="/" className="d-block">Alexander Pierce</Link>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
              <li className="nav-item">
                <Link to="#/" className="nav-link">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                    User
                    <i className="fas fa-angle-left right" />
                    <span className="badge badge-info right">6</span>
                  </p>
                </Link>
                
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/user" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p> List user </p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/user/add" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p> Add user </p>
                    </Link>
                  </li>
                  
                </ul>
              </li>
              
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
  )
}
