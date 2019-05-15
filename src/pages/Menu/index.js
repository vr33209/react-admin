import React, { Component } from "react";

// import { Container } from './styles';

export default class Menu extends Component {
  render() {
    return (
  <div>
  <aside className="main-sidebar">
    {/* sidebar: style can be found in sidebar.less */}
    <section className="sidebar">
      {/* Sidebar user panel */}
      <div className="user-panel">
        <div className="pull-left image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User" />
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
          <a href="fake_url"><i className="fa fa-circle text-success" /> Online</a>
        </div>
      </div>
      {/* search form */}
      <form action="#" method="get" className="sidebar-form">
        <div className="input-group">
          <input type="text" name="q" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button type="submit" name="search" id="search-btn" className="btn btn-flat">
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>
      {/* /.search form */}
      {/* sidebar menu: : style can be found in sidebar.less */}
      
    </section>
    {/* /.sidebar */}
  </aside></div>

     
    );
  }
}
