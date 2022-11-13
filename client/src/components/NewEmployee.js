import axios from 'axios';
import React, { useState } from 'react'
import { useEmployeeContext } from '../context/EmployeeContext';

const NewEmployee = () => {
    const{ createNewEmployee } = useEmployeeContext();
    const[name, setName] = useState('');
    const[age, setAge] = useState();
    const[email, setEmail] = useState('');
    const[dob, setdob] = useState();
    const[address, setAddress] = useState('');
    const[photo, setPhoto] = useState('');
    


    const save = (event) => {
        event.preventDefault();
        console.log({name, age, email, dob, address, photo});
        
        const newEmployee = {name, age, email, dob, address, photo};
        axios.post('/api/employees', {name, age, email, dob, address, photo}).then(res => {
            createNewEmployee(newEmployee)
        })
    }
    const changeHandler = (event) => {
        console.log(event.target.files)
        setPhoto(event.target.files[0]);
    }
  return (
    <div>
        <h1> New Employee</h1>
         <form>
            <div>
                <label>Name : </label>
                <input type="text" name="name" value={name} onChange={(event)=> setName(event.target.value)}/>
            </div>
            <div>
                <label>Age : </label>
                <input type="number" name="age" value={age || ''}  onChange={(event)=> setAge(event.target.value)}/>
            </div>
            <div>
                <label>Email : </label>
                <input type="email" name="email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
            </div>
            <div>
                <label>Date of birth : </label>
                <input type="date" name="dob" value={dob || ''}  onChange={(event)=> setdob(event.target.value)}/>
            </div>
            
            <div>
                <label>Address : </label>
                <input type="text" name="address" value={address}  onChange={(event)=> setAddress(event.target.value)}/>
            </div>
            
            
            <div>
                <label>Photo : </label>
                
                <input type="file" name="photo" onChange={changeHandler} />
                {/* <input type="file" name="photo" value={photo} onChange={(event)=> setPhoto(event.target.files[0])}/> */}
            </div>
            <button onClick={save}>Save</button>
        </form>


    </div>
  )
}

export default NewEmployee