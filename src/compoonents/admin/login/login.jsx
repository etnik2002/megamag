import React from 'react';
import './login.css';
import axios from 'axios';
import {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [website, setWebsite] = useState('');
  const [phone, setPhone] = useState(0);
  const [delivery, setDelivery] = useState(true);
  const [file, setFile] = useState(null);

  const createEmail = (event) => {
    setEmail(event.target.value);
    console.log({ email });
  };

  const createPw = (event) => {
    setPassword(event.target.value);
    console.log({ password });
  };

  const createName = (event) => {
    setName(event.target.value);
    console.log({ name });
  };

  const createPhone = (event) => {
    setPhone(event.target.value);
    console.log({ phone });
  };

  const createWebsite = (event) => {
    setWebsite(event.target.value);
    console.log({ website });
  };

  const createDelivery = (event) => {
    setDelivery(event.target.value);
    console.log({ delivery });
  };

  const uploadImage = (event) =>{
    setFile(event.target.files[0]);
    console.log({file})
  }

  const registerUser = async () => {

    // const image = new FormData();
    // formData.append('file', file);

    await axios('http://localhost:8800/create-magazine', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        email: email,
        password: password,
        name:name,
        website:website,
        phone:phone,
        delivery:delivery,
        // image:image,
      }),
    })
      .then(() => {
        alert('You have been added to the system!');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form>
      <label htmlFor="name">Magazine name:</label>
      <input onChange={createName} type="text" name="name" required />

      <label htmlFor="phone">Magazine phone:</label>
      <input onChange={createPhone} type="number" name="phone" required />

      <label htmlFor="email">Email:</label>
      <input onChange={createEmail} type="text" name="email" required />

      <label htmlFor="website">Website:</label>
      <input onChange={createWebsite} type="text" name="website"  />

      <label htmlFor="password">Password:</label>
      <input onChange={createPw} type="text" name="password" required />

      <label htmlFor="delivery">Delivery:</label>
      <select onChange={createDelivery}>
        <option value='true'>True</option>
        <option value='false'>False</option>
      </select>

      <label htmlFor="image">Magazine image:</label>
      <input onChange={createPw} type="file" name="image"  />


      <button onClick={registerUser} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Login;
