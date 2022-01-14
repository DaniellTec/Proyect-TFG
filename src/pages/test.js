import React from 'react'
import '../css/styles.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Test1 from '../images/test/test1.jpg';

import {Link} from "react-router-dom";

const Test = () => {
    return (
    <>

        <div className='container'>
                <br/><br/>
                <h3>
                <a href="/">Inicio</a> >
                <a href="/art">Arte</a> >
                Artículo 1
                {/*<Link style={{ textDecoration: 'none' }} to="/Index"> Inicio </Link> > 
                <Link style={{ textDecoration: 'none' }} to="/Index"> Test </Link> > 
                <Link style={{ textDecoration: 'none' }} to="/Index"> Arte </Link> > Artículo 1
                */}
                </h3>
                <br/>
        </div>    
            

        <div className='container margin-top:5px'>
            <div className='clearfix'>
                <h3>Artículo1 
                </h3>
                
                <img src={Test1} className="products"/>  9.95$
                
            </div>
        {/*
            <div className='container'>

            <p>
                9.95$
            </p>
    
            </div>
        */}        
                <br></br>

            <div>
            <button class="purple">Añadir Al Carrito</button>
                {/*}
                <button type="button" class="btn btn-primary">Add To Cart</button>
                */}
            </div>       
        </div>
             
    </>
      
    );
  };
  
  export default Test;