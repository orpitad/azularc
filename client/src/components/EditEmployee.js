import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEmployeeContext } from "../context/EmployeeContext";

const EditEmployee = () => {
  let { id } = useParams();

  const { employee } = useEmployeeContext();

  // const [currentEmployee, setCurrentEmployee] = useState({
  //     name:'',
  //     age: null,
  //     email:'',
  //     date: null,
  //     address: '',
  //     photo:[]
  // })
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [email, setEmail] = useState("");
  const [dob, setdob] = useState();
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState();

  useEffect(() => {
    const emp = employee.find((item) => item._id === id);
    console.log("EMP",emp)
    console.log(emp);
    setName(emp.name)
    setAge(emp.age)
    setEmail(emp.email)
    setdob(emp.dob)
    setAddress(emp.address)
    setPhoto(emp.photo)
    // setCurrentEmployee(emp);
  }, [id, employee]);

  const changeHandler = (event) => {
    setPhoto(event.target.files[0]);
  };

  const update = () => {};

  return (
    <div>
      <h1> Edit Employee</h1>
      
        <form>
          <div>
            <label>Name : </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label>Age : </label>
            <input
              type="number"
              name="age"
              value={age || ""}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <div>
            <label>Email : </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label>Date of birth : </label>
            <input
              type="date"
              name="dob"
              value={dob || ""}
              onChange={(event) => setdob(event.target.value)}
            />
          </div>

          <div>
            <label>Address : </label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>

          <div>
            <label>Photo : </label>

            <input type="file" name="photo" onChange={changeHandler} />
            {/* <input type="file" name="photo" value={photo} onChange={(event)=> setPhoto(event.target.files[0])}/> */}
          </div>
          <button onClick={update}>Update</button>
        </form>
    </div>
  );
};

export default EditEmployee;
