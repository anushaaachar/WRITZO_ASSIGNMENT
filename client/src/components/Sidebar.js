import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='row'>
        <div className='col-md-2'>

       
    <div style={{ display: 'flex', height: '100vh',width:'20vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="grey" backgroundColor="white">
        <CDBSidebarHeader prefix={<i className="fa fa-chevron-left"></i>}>
          <a href="/" className="text-decoration-none bg-light">
          <p>
            <span className='header-text'>Wrizto</span><br></br>
            <span className='header-smaller-text mt-0'>HEALTHCARE</span></p>
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddDistributors" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Manage Distributors</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Manage Client</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Manage License</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Manage User</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            <p>
            v1.0<br></br>
            Powered by <span className='footer-text'>Wrizto healthcare</span></p>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    </div>
    </div>
  );
};

export default Sidebar;