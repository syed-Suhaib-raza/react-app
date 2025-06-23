import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PatchU() {
    const nv = useNavigate();
    const [userId, setUserId] = useState('');
    const [userL, setUserL] = useState('');
    const [usere, setUserE] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const re = await fetch(`http://localhost:3000/users/${userId}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({last_name:userL, email:usere}),
        })
        if (re.ok) {
            alert('User updated successfully');
            nv('/users');
        }
        else {
            alert('Error updating user');
        }
    };

    return(
        <div>
            <button onClick={()=>{nv('/')}}>Go to Home</button>
            <button onClick={()=>{nv('/users')}}>Get Users</button>
            <button onClick={()=>{nv('/fusers')}}>Find User</button>
            <button onClick={()=>{nv('/delete')}}>Delete User</button>
            <button onClick={()=>{nv('/add')}}>Add User</button>
            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="first_name" value={userId} onChange={(e)=>{
                    setUserId(e.target.value);
                }} required />
                <input type="text" name="last_name" placeholder="Last Name" value={userL} onChange={(e)=>{
                    setUserL(e.target.value);
                }} required />
                <input type="email" name="email" placeholder="Email" value={usere} onChange={(e)=>{
                    setUserE(e.target.value);
                }} required />
                <button type="submit">Update User</button>
            </form>
        </div>
    )


}

export default PatchU;