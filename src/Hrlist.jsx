import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Hrlist = (props) => {
    const [search, setSearch] = useState('')

    return (
        <div className="container mt-3">
            <Link to='/Create'><button className="btn btn-primary">Add</button></Link>
            <input className= "form-control" type="text" value= {search} onChange= {(e) => setSearch(e.target.value)} />
            <Table striped bordered hover>
                <thead>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Description</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {props.hrData.filter(item => {
                        const name = item.name.toLowerCase().includes(search.toLowerCase())
                        const job = item.job.toLowerCase().includes(search.toLowerCase())
                        const desc = item.desc.toLowerCase().includes(search.toLowerCase())
                        return name || job || desc
                    }).map((item, index) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.job}</td>
                                <td>{item.desc}</td>
                                <td>
                                    <button className="btn btn-danger" onClick= {() => props.handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default Hrlist
