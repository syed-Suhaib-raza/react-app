import React from 'react'
import { useNavigate } from 'react-router-dom';


function Home(){
    const nv = useNavigate();
    const li = () => {
        nv('/users')
    }
    const fli = () => {
        nv('/fusers')
    }
    return (
    <div>
        <div>
            <h1>You are on the home page</h1>
        </div>
        <div>
            <button onClick={li}>Get Users</button>
            <button onClick={fli}>Find User</button>
            <button onClick={()=>{nv('/add')}}>Add User</button>
            <button onClick={()=>{nv('/delete')}}>Delete User</button>
            <button onClick={()=>{nv('/patch')}}>Update User</button>
        </div>
    </div>

    )
}

export default Home;