import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom'

const menus = [
  {
    name: 'Trang chu',
    to: '/',
    exact: true
  },
  {
    name: 'Quan ly san pham',
    to: '/product-list',
    exact: false
  }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route 
      path={to}
      exact={activeOnlyWhenExact}
      children={({match})=>{
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
          <a className="navbar-brand" href="">CALL API</a>
          <ul className="nav navbar-nav">
            {this.showMenu(menus)}
          </ul>
        </div>
    );
  }

  showMenu = (menus) => {
    var result = null;
    if(menus.length>0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            label={menu.name}
            key={index}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        )
      })
    }
    return result;
  }
}

export default Menu;
