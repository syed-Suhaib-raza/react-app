import React, { useState } from 'react';
import useUserData from './flistu';
import { useNavigate } from 'react-router-dom';
function UserList() {
    const nv = useNavigate();
  const [username, setUsername] = useState('');
  const [submittedName, setSubmittedName] = useState('');
  const { data, error } = useUserData({
    url: 'http://localhost:3000/users',
    name: submittedName,
  });

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(username); // This triggers the fetch
  };

  return (
    <div>
    <div>
        <button onClick={()=>{nv('/')}}>Go Home</button>
        <button onClick={()=>{nv('/users')}}>Get Users</button>
      </div>
      <h1>User:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {data.length === 0 && submittedName ? (
          <p>No user found</p>
        ) : (
            <div key={data.first_name}>
                <h3>{data.first_name} {data.last_name}</h3>
                <p>{data.email}</p>
            </div>
        )}
    </div>
  );
}

export default UserList;
