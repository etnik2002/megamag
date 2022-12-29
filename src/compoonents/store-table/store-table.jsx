import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'

const Store_table = () => {

    const url = 'http://localhost:8800/users'

    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(url)
        .then((response) => {
          setData(response.data);
          console.log({data})
        });
    }, []);
    
    return (
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.email}</li>
        ))}
      </ul>
    );
    }


export default Store_table;
