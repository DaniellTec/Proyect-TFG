import React from 'react'
import '../css/styles.css';

import PlusIcon from '../images/artists/pluss.png';

import { BsPlusCircleFill } from "react-icons/bs";

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function TableExample(props) {
    return (
        <Table>
        <Tbody>
          <Tr>
            <Td>  <img src={PlusIcon} className="items"/>
            <center><Td className="tdt"><BsPlusCircleFill/></Td></center>    
        </Td>
          </Tr>
          <Tr>
            <Td>Capstone Data</Td>
          </Tr>
          <Tr>
            <Td>  <img src={PlusIcon} className="items"/>
            <center><Td className="tdt"><BsPlusCircleFill/></Td></center>    
        </Td>
          </Tr>
          <Tr>
            <Td>Capstone Data</Td>
          </Tr>
          <Tr>
            <Td>  <img src={PlusIcon} className="items"/>
            <center><Td className="tdt"><BsPlusCircleFill/></Td></center>    
        </Td>
          </Tr>
          <Tr>
            <Td>Capstone Data</Td>
          </Tr>
        </Tbody>
      </Table>
    );
  }
