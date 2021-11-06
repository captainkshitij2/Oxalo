import React from 'react';
import { Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './App.css'


function HomePage() {
    return (
        <div>

            <center>



             <h1 className='heading'>Welcome to the homepage</h1>
           
             <Link to='./Create'> <Button className="bta"> Click for Creating </Button> </Link> 
           
           
           <Link to='./Applicant'> <Button className='btb'> Click to Apply For Job </Button> </Link>

           </center> 
        
        
        </div>
    )
}


export default HomePage ;