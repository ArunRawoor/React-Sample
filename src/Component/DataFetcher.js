import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setData('Fetched data!');
    }, 2000);
  }, []); // Empty dependency array means this effect runs only once after mounting

  return (
    <div>
      <p>Data: {data}</p>
    </div>
  );
}

export default DataFetcher;
