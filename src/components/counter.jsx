import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';


const key = process.env.REACT_APP_COUNT_API_KEY;
const namespace = process.env.REACT_APP_MY_DOMAIN_NAMESPACE || '';

const Counter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchCounterData = async () => {
      setIsLoading(true);
      await axios.get(`https://api.countapi.xyz/info/${key}`)
      .then((response) => {
        console.log(response);
        setCount(response.data.value);
      }).finally(() => {
        setIsLoading(false);
      })
    }
    fetchCounterData()

  }, [])


  return (
    <div>
      {
        isLoading ? (
          <h4> Loading... </h4>
        ) : (
          <>
            <h3> Counter </h3>
            {count}
          </>
        )
      }
      
    </div>
  );
};

export default Counter;