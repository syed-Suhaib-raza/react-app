import { useState, useEffect } from 'react';

function useUserData({ url, name }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!name) {
      setData([]);
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`${url}/${name}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch user data:', err);
        setData([]);
        setError(err.message);
      }
    };

    fetchUserData();
  }, [url, name]); // ✅ Hook runs when submittedName changes

  return { data, error };
}

export default useUserData;
