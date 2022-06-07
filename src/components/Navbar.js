import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <Typography style={{fontWeight: 'bold', color: "#FFF"}} variant="h5">Reporting</Typography>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/report' activeStyle>
            <Typography style={{color: "#FFF"}} variant="h6">Generate Report</Typography>
          </NavLink>
          <NavLink as="a" href="https://joshuagarcia.site/crudGrid.php" activeStyle>
            <Typography style={{color: "#FFF"}} variant="h6">User Management</Typography>
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink as="a" href="https://joshuagarcia.site/logout.php"><Typography style={{color: "#FFF"}} variant="h6">Logout</Typography></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;