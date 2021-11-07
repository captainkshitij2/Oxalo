import React, { useState } from 'react';
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom';
import {Button} from 'bootstrap';
import { useHistory } from 'react-router'



import List from './List'
const Create = (props) => {
    let history = useHistory()
    const [data, setData] = useState({
        name: '',
        job: '',
        desc: ''
    
    });

    const { name, job, desc } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleAdd(data)
        history.push('/Hrlist')
    }

    return (
        <div className="container">
            <div className="formtext" > HR's Desk</div><br/>
        
           


            <form onSubmit= {handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name<span>*</span></label>
                    <input type="text" className="form-control" name= "name" value= {name} onChange= {handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Description<span>*</span></label>
                    <input type="text" className="form-control" name= "job" value= {job} onChange= {handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Technologies<span>*</span></label>
                    <input type="text" className="form-control" name= "desc" value= {desc} onChange= {handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            <Link to='./List'> <button className='btn btn-success'> Check applicants  </button> </Link> 


           
           
            </form>
        </div>
    );
}

export default Create;