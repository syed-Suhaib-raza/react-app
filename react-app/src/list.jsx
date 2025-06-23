import React from 'react';
import {lutil} from './listutil.jsx'
import { useNavigate } from 'react-router-dom';
function List(){
    const nv = useNavigate();
    const li = () => {
        nv('/')
    }
    const [d] = lutil('http://localhost:3000/users');
    return(
        <div>
            <button onClick={li}>Go to Home</button>
            <button onClick={()=>{nv('/fusers')}}>Find User</button>
            <button onClick={()=>{nv('/add')}}>Add User</button>
            <button onClick={()=>{nv('/delete')}}>Delete User</button>
            <button onClick={()=>{nv('/patch')}}>Update User</button>
            <h1>List of users:</h1>
            {
                d.map((user, index) => (
                    <div key={index}>
                        <h3>{user.first_name} {user.last_name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default List
