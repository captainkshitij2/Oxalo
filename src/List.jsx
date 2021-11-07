import { Button, Table, Modal } from "react-bootstrap";
import React from 'react'
import QRcode from 'qrcode'

const List = (props) => {
    return (
        <div className='container'>
            <span>List Of Applicant </span>
            
            <Table bordered striped hover>
                <thead>
                    <th>Name</th>
                    <th>Technologies</th>
                    <th>Salary</th>
                    <th>notice period</th>
                    <th>qr code</th>
                </thead>
                <tbody> 
                   {props.applicantData.map(item => {
                       return (
                           <tr>
                               <td>{item.nameof}</td>
                               <td>{item.techno}</td>
                               <td>{item.salary}</td>
                               <td>{item.notice}</td>
                               <td>
                                    {QRcode}
                               </td>
                           </tr>
                       )
                   })}
                </tbody> 
            

            </Table>
        </div>
    )
}

export default List;
