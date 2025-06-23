import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';

function deleteU(){
    const nv = useNavigate();
    const [id, setId] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:3000/users/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }}
        )
        if (response.ok) {
            alert('User deleted successfully');
            nv('/users');
        } else {
            alert('Error deleting user');
        }
    }
    return(
        <div>
            <button onClick={()=>{nv('/')}}>Go to Home</button>
            <button onClick={()=>{nv('/users')}}>Get Users</button>
            <button onClick={()=>{nv('/fusers')}}>Find User</button>
            <button onClick={()=>{nv('/add')}}>Add User</button>
            <button onClick={()=>{nv('/patch')}}>Update User</button>
            <h1>Delete User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="User ID" value={id} onChange={(e) => setId(e.target.value)} required />
                <button type="submit">Delete User</button>
            </form>
        </div>
    )
}

export default deleteU;