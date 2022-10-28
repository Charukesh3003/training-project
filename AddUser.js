import React from 'react';
import { useState } from 'react';
import './AddUser.css';
function AddUser(props) {
    var [un, setUn] = useState('');
    var [pass, setPass] = useState('');
    var changeUn = (event) => {
        //console.log(event.target.value)
        setUn(event.target.value)
    }
    var changePass = (event) => {
        setPass(event.target.value)
    }
    var registerUser = async (event) => {
        event.preventDefault();
        var user = {
            name: "Lucky",
            username: un,
            password: pass,
            email: 'L@gmail.com',
            phone: '9090909090',
            dob:"2022-10-19"
        };
        console.log(user)
        //const response = axios.post('http://localhost:5000/api/User/Register', user)
        //console.log(response)
        //alert("Registration Done")
    }
    return (
        <div className='userdiv'>
            <form onSubmit={registerUser}>
                <label className='form-control'>Username</label>
                <input className='form-control' type="text" onChange={changeUn} />
                <label className='form-control'>Password</label>
                <input className='form-control' type="password" onChange={changePass} />
                <button className='btn btn-success'>Register</button>
            </form>
        </div>
    );
}
export default AddUser;