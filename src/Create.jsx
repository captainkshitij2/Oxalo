import React, { useState } from 'react';

const Create = (props) => {
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
        console.log(data)
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
            </form>
        </div>
    );
}

export default Create;