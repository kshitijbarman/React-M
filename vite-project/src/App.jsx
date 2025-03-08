import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LazyLoadingImage from './components/LazyLoadingImage';
// import Api from './components/Api';
import SimpleForm from './components/SimpleForm';
import Moment from './components/Moment';

const App = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(response => response.json())
  //     .then(data => setData(data)); 
  // }, []);

  return (
    <div>
      {/* <Counter /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <LazyLoadingImage />
      {/* <Api/> */}
      {/* <SimpleForm/> */}
      {/* <Moment/> */}
    </div>
  );
};

export default App;