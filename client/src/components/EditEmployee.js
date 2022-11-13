import React , {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useEmployeeContext } from '../context/EmployeeContext';

const EditEmployee = () => {
    let { id } = useParams();
    
    const { employee} = useEmployeeContext();

    const [currentEmployee, setCurrentEmployee] = useState({
        name:'',
        age: null,
        email:'',
        date: null,
        address: '',
        photo:[]
    })
    useEffect(() => {
        const emp = employee.find(item=> item._id === id);
    console.log(emp);
    setCurrentEmployee(emp);

}, [id, employee])

    return (
    <div>
        <h1> Edit Employee</h1>
        {
            currentEmployee?.name.length > 0 && <form>
            <div>
                <label>Name : </label>
                <input type="text" value={currentEmployee.name}/>
            </div>
            <div>
                <label>Age : </label>
                <input type="number" value={currentEmployee.age}/>
            </div>
            <div>
                <label>Email : </label>
                <input type="email" value={currentEmployee.email}/>
            </div>
            <div>
                <label>Date of birth : </label>
                <input type="date" value={currentEmployee.dob}/>
            </div>
            
            <div>
                <label>Address : </label>
                <input type="text" value={currentEmployee.address}/>
            </div>
            
            
            <div>
                <label>Photo : </label>
                <input type="file" value={currentEmployee.photo}/>
            </div>
        </form>
        }
        


    </div>

    
  )
}

export default EditEmployee