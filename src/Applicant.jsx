import React from 'react'
import { useState } from 'react';
const Applicant = () => {

        const [data, setData] = useState({
            jobcode: '',

            nameof: '',
            notes: '',
            techno:'',
            notice: '',
            salary:'',
        
        });
    
        const { jobcode, nameof, notes,techno,notice,salary } = data;
    
        const handleChange = (e) => {
            setData({...data, [e.target.name]: e.target.value});
        }
    
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(data)
        }
    return (
        <div>
              <form onSubmit= {handleSubmit}>
                <div className="mb-3">
                    <label className="form-label"> JOB ROLE<span>*</span></label>
                    <input type="text" className="form-control" name= "jobcode" value= {jobcode} onChange= {handleChange} />
                </div>
                
                
                <div className="mb-3">
                    <label className="form-label">Name Of Applicant<span>*</span></label>
                    <input type="text" className="form-control" name= "nameof" value= {nameof} onChange= {handleChange} />
                </div>

                
                <div className="mb-3">
                    <label className="form-label">Details of you<span>*</span></label>
                    <input type="text" className="form-control" placeholder="please tell us in few lines about you" name= "notes" value= {notes} onChange= {handleChange} />
                </div>

                
                <div className="mb-3">
                    <label className="form-label">Technologies You Know<span>*</span></label>
                    <input type="text" className="form-control" name= "techno" value= {techno} onChange= {handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Notice Period<span>*</span></label>
                    <input type="text" className="form-control" name= "notice" value= {notice} onChange= {handleChange} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Salary<span>*</span></label>
                    <input type="number" className="form-control" name= "salary" value= {salary} onChange= {handleChange} />
                </div>





                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Applicant ;