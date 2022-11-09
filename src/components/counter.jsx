import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import '../css/counter.css';
import Button from './button';

const key = process.env.REACT_APP_COUNT_API_KEY;
const namespace = process.env.REACT_APP_MY_DOMAIN_NAMESPACE || 'default';

const Counter = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [count, setCount] = useState();

  const incrementCounter = async () => {
    await axios.get(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then((response) => {
      setCount(response.data.value);
    })
  }

  const decrementCounter = async () => {
    await axios.get(`https://api.countapi.xyz/update/${namespace}/${key}?amount=-1`)
    .then((response) => {{
      setCount(response.data.value);
    }})
  }

  useEffect(() => {
    const fetchCounterData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        await axios.get(`https://api.countapi.xyz/info/${namespace}/${key}`)
        .then((response) => {
          setCount(response.data.value);
        }).finally(() => {
          setIsLoading(false);
        })
      }
      catch (error) {
        setHasError(true);
        setCount(0);
      }
    }
    fetchCounterData()

  }, [])


  return (
    <div className='counter-container'>
      <div className='counter-content'>
      {hasError && <div> Something went wrong. </div> }
      {
        isLoading ? (
          <> Loading... </>
        ) : (
          <>
            <h3> Counter </h3>
            <div className='counter-count'>
              {count}
            </div>

            <div className='counter-button-row'>
              <Button onClick={decrementCounter}> -1 </Button>
              <Button onClick={incrementCounter}> +1 </Button>
            </div>
          </>
        )
      }
      </div> 
    </div>
  );
};

export default Counter;