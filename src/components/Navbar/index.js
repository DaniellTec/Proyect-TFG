import React from 'react'
import '../../css/styles.css';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements';

import { BsFillPersonFill, BsSearch } from "react-icons/bs";

import Footer from './footer'

import { Helmet } from 'react-helmet';

const Menu = () => {
    return (
      <> 
       {/*<img src="https://previews.123rf.com/images/spicytruffel/spicytruffel1904/spicytruffel190400122/122319138-neon-game-signs-retro-video-games-night-light-icons-virtual-gaming-club-emblems-arcade-glowing-poste.jpg" className="banner"/>*/}
    
      <Helmet>
        <title>TFG | Home</title>
      </Helmet>
      
       <Nav>
          <NavLink to='/'>
           (Logo) {/*<img src={require('../../images/icons/Icon.png')} alt='logo' />*/}
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/shopby' activeStyle>
              Shop By
            </NavLink>
            <NavLink to='/artists' activeStyle>
              Artistas
            </NavLink>
            <NavLink to='/art' activeStyle>
              Arte
            </NavLink>
            <NavLink to='/designs' activeStyle>
              Merchs
            </NavLink>
            <NavLink to='/events' activeStyle>
              Eventos
            </NavLink>
            <NavLink to='/comming' activeStyle>
              Comming Soon
            </NavLink>
            <NavLink to='/about' activeStyle>
              About Us
            </NavLink>
          </NavMenu>
      <Bars/>
      <br/>
        <NavMenu>
          &nbsp;&nbsp;&nbsp;<input className= "inputs fields" type="text" placeholder="Search" aria-label="Search"/>
          <NavLink to='/login' activeStyle>
              <BsFillPersonFill color='#604eff'/>
          </NavLink> 
        </NavMenu>
        </Nav>
        <Footer/>
      </>
    );
  };
  //https://i.redd.it/zt6mzvpvcvk31.jpg
  export default Menu;