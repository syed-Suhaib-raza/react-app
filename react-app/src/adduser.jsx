import React from 'react';
import { useNavigate } from 'react-router-dom';

function addU(){
    const nv = useNavigate();
    const li = () => {
        nv('/')
    }
    const [first_name, setFirstName] = React.useState('');
    const [last_name, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ first_name, last_name, email }),
        });
        if (response.ok) {
            alert('User added successfully');
            nv('/users');
        } else {
            alert('Error adding user');
        }
    };

    return (
        <div>
            <button onClick={li}>Go to Home</button>
            <button onClick={()=>{nv('/users')}}>Get Users</button>
            <button onClick={()=>{nv('/fusers')}}>Find User</button>
            <button onClick={()=>{nv('/delete')}}>Delete User</button>
            <button onClick={()=>{nv('/patch')}}>Update User</button>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required />
                <input type="text" placeholder="Last Name" value={last_name} onChange={(e) => setLastName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default addU;