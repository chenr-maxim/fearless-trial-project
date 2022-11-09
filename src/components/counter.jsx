import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import '../css/counter.css';

const key = process.env.REACT_APP_COUNT_API_KEY;
const namespace = process.env.REACT_APP_MY_DOMAIN_NAMESPACE || 'default';

const Counter = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      await axios.get(`https://api.countapi.xyz/info/${namespace}/${key}`)
      .then((response) => {
        setCount(response.data.value);
      }).finally(() => {
        setIsLoading(false);
      })
    }
    fetchCounterData()

  }, [])


  return (
    <div className='counter-container'>
      <div className='counter-content'>
      {
        isLoading ? (
          <> Loading... </>
        ) : (
          <div className='counter-content'>
            <h3> Counter </h3>
            <div className='counter-count'>
              {count}
            </div>

            <div className='counter-button-row'>
              <button
                className='counter-button'
                onClick={decrementCounter}
              >
                -1
              </button>
              <button
                className='counter-button'
                onClick={incrementCounter}
              >
                +1
              </button>
            </div>
          </div>
        )
      }
      </div> 
    </div>
  );
};

export default Counter;