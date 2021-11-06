import React, { useState } from 'react';

const Create = (props) => {
    const [data, setData] = useState({
        name: '',
        username: '',
        email: ''
    
    });

    const { name, username, email } = data;

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <div className="container">
        
            <form onSubmit= {handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name<span>*</span></label>
                    <input type="text" className="form-control" name= "name" value= {name} onChange= {handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Job Description<span>*</span></label>
                    <input type="text" className="form-control" name= "username" value= {username} onChange= {handleChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Technologies<span>*</span></label>
                    <input type="email" className="form-control" name= "email" value= {email} onChange= {handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Create;