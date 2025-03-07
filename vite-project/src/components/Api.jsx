// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios';
// // import {LazyLoadImage} from 'react-lazy-load-image-component';
// // import 'react-lazy-load-image-component/src/effects/blur.css';
// // import {useNavigate} from 'react-router-dom'

// // const Api = () => {
// //   const [data, setData] = useState([])
// //   const [toggle, setToggle] = useState(true)
// //   const [search, setSearch] = useState('')
// //   const [orderSort, setOrderSort] = useState(" ")

// //   const navigate = useNavigate()

// //   useEffect(() => {
// //     product()
// //   }, [toggle])

// //   const product = async () => {
// //     const result = await axios.get('https://fakestoreapi.com/products;)
// //     setData(result.data)
// //     console.log(`>>>result>>>`, result);
// //     if(result.status === 200) {
// //       alert("Data fetched successfully");
// //       navigate('/counter')
// //     }
// //   }

// //   const abc = async () => {
// //     setToggle(!toggle)
// //   }

// //   const abcd = async() => {
// //     navigate('/')
// //   }

// //   const filterData = data.filter(item =>
// //     item.category.toLowerCase().includes(search.toLowerCase()) ||
// //     item.title.toLowerCase().includes(search.toLowerCase())
// //   )

// //   console.log(`>>>>>>orderSort`, orderSort);


// //   const sortData = () => {
// //     if (orderSort === 'asc') {
// //       return [...filterData].sort((a, b) => a.price - b.price)
// //     }
// //     else if (orderSort === 'dsc') {
// //       return [...filterData].sort((a, b) => b.price - a.price)
// //     }
// //     return filterData
// //   }

// //   return (
// //     <div>
// //       <input type='text'
// //         placeholder='search your text'
// //         value={search}
// //         onChange={(e) => setSearch(e.target.value)}
// //       />
// //       <button onClick={() => setOrderSort('asc')}>Low TO High</button>
// //       <button onClick={() => setOrderSort('dsc')}>high to low</button>
// //       <button onClick={abcd}>got to home page </button>
// //       <button onClick={abc}>Click</button>
// //       {sortData().map((item, index) => (
// //         <div key={index}>
// //           <h1> Title : {item.title}</h1>
// //           <h2> Category : {item.category}</h2>
// //           <LazyLoadImage
// //           effect="blur"
// //           wrapperProps={{
// //               style: {transitionDelay: "2s"},
// //           }}
// //            src={item.image}
// //           />
// //           <h3> Count : {item.rating.count}</h3>
// //           <h3> Price : {item.price}</h3>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default Api






























// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// // import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
// import { useNavigate } from 'react-router-dom';

// const Api = () => {
//   const [data, setData] = useState([]);
//   const [toggle, setToggle] = useState(true);
//   const [search, setSearch] = useState('');
//   const [orderSort, setOrderSort] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//   }, [toggle]);

//   const fetchProducts = async () => {
//     try {
//       const result = await axios.get('https://fakestoreapi.com/products');
//       if (result.status === 200) {
//         setData(result.data);
//         console.log('Data fetched successfully:', result.data);
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const toggleFetch = () => setToggle(prev => !prev);
//   const goToHome = () => navigate('/');

//   // Filtered data based on search input
//   const filteredData = useMemo(() => {
//     return data.filter(item =>
//       item.category.toLowerCase().includes(search.toLowerCase()) ||
//       item.title.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [data, search]);

//   // Sorting the filtered data
//   const sortedData = useMemo(() => {
//     if (orderSort === 'asc') return [...filteredData].sort((a, b) => a.price - b.price);
//     if (orderSort === 'dsc') return [...filteredData].sort((a, b) => b.price - a.price);
//     return filteredData;
//   }, [orderSort, filteredData]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search your text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button onClick={() => setOrderSort('asc')}>Low To High</button>
//       <button onClick={() => setOrderSort('dsc')}>High To Low</button>
//       <button onClick={goToHome}>Go to Home Page</button>
//       <button onClick={toggleFetch}>Refetch Data</button>

//       {sortedData.map((item) => (
//         <div key={item.id}>
//           <h1>Title: {item.title}</h1>
//           <h2>Category: {item.category}</h2>
//           <LazyLoadImage
//             effect="blur"
//             wrapperProps={{ style: { transitionDelay: '2s' } }}
//             src={item.image}
//             alt={item.title}
//           />
//           <h3>Count: {item.rating.count}</h3>
//           <h3>Price: ${item.price}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Api;


























