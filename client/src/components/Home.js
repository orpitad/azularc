import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEmployeeContext } from '../context/EmployeeContext';

const Home = () => {
  const { getEmployees, employee} = useEmployeeContext();
  useEffect(() => {
    getEmployees();
    console.log("Here", employee);
}, []);

let navigate = useNavigate(); 
  const routeChange = (id) =>{ 
    // navigate({
    //     pathname: '/edit',
    //     search: '?' + id,
    //   });
      navigate("edit/"+id)
    }
    
    const addEmployee= () => {
        navigate("newEmployee")
    }
  
  return (
    <div>
        <h1>Employees</h1>
        <button  onClick={addEmployee}>Add Employee</button>
        {
        employee && 
        <table>
            <thead  className="TableHead">
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>DOB</th>
                <th>Address</th>
                <th>Photo</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                employee.map((item) => {
                    return (
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.email}</td>
                        <td>{item.dob}</td>
                        <td>{item.address}</td>
                        <td>{item.photo}</td>
                        <td> 
                            <button onClick={() => routeChange(item._id)}>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>)
                })
            }
            </tbody>
            
        </table>
        }
        
    </div>
  )
}

export default Home