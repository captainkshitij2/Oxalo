import { Button, Table, Modal } from "react-bootstrap";
import React from 'react';
import {useState} from 'react';
import {useHistory} from  'react-router'
import { Link } from "react-router-dom";
const List = (props) => {
    const[search,setSearch]= useState('');


    return (

        
        <div className='container'style={{marginTop:"100px"}} >
            <span  style={{fontSize:"20px"}}><b>List Of Applicant </b></span>
            
            <input className= "form-control mt-3" placeholder='Search Here' type="text" value= {search} onChange= {(e) => setSearch(e.target.value)} />

            
            <Link to='/Applicant' > <button className="btn btn-primary"> Add Applicant</button> </Link>

            <Table bordered striped hover>
                <thead>
                    <th>Name</th>
                    <th>Technologies</th>
                    <th>Salary</th>
                    <th>notice period</th>
                    <th>qr code</th>
                </thead>
                <tbody> 


                   {props.applicantData.filter(item=>{
                       const nameof=item.nameof.toLowerCase().includes(search.toLowerCase())
                       const techno=item.techno.toLowerCase().includes(search.toLowerCase())
                       const salary=item.salary.toLowerCase().includes(search.toLowerCase())
                       const notice=item.notice.toLowerCase().includes(search.toLowerCase())
                       return nameof || techno || salary || notice

                   }).map(item => {
                       return (
                           <tr>
                               <td>{item.nameof}</td>
                               <td>{item.techno}</td>
                               <td>{item.salary}</td>
                               <td>{item.notice}</td>
                           </tr>
                       )
                   })}






                </tbody> 
            


            </Table>
            <Link to='/Create'><button className="btn btn-primary" style={{marginLeft:"1000px",marginTop:"10px"}}>Hr desk </button></Link>

        </div>
    )
}

export default List;
