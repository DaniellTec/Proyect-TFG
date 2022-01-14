import React from 'react'
import '../css/styles.css';

import PlusIcon from '../images/artists/pluss.png';

import Test1 from '../images/test/test1.jpg';

import { BsPlusCircleFill } from "react-icons/bs";

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const Clothes = () => {
    return (
      <> 
        <div>
        <br/><br/>
            <h1 className="center"> 
                Arte<br/><br/>
            </h1>
        </div>
        
        <table>
    <tr>
    <td>
        <a href="./Test">
        <img src={Test1} className="items"/>
        </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} width="200" height="200" className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp; &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp; &nbsp;
       
    </tr>
    <tr>
        
    </tr>
</table>
<br/>
<table>
    <tr>
    <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp; &nbsp;
        <td>
        <img src={PlusIcon} width="200" height="200" className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp; &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp; &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp; &nbsp;
    
    </tr>
    <tr>
        
    </tr>
</table>

<table>
    <tr>
    <td>
        <a href="./Test">
        <img src={PlusIcon} className="items"/>
        </a>
            <center><td className="tdt"><BsPlusCircleFill/></td></center>    
        </td>
        &nbsp;  &nbsp;  &nbsp; &nbsp;
        <td>
        <img src={PlusIcon} width="200" height="200" className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp; &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
        &nbsp;  &nbsp;  &nbsp; &nbsp;
        <td>
        <img src={PlusIcon} className="items"/>
            <center><td className="tdt"><BsPlusCircleFill/></td></center> 
        </td>
         &nbsp;  &nbsp;  &nbsp; &nbsp;
       
    </tr>
    <tr>
        
    </tr>
</table>
<br/>

      </>
    );
  };
  
  export default Clothes;
