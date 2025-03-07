// import React, { useEffect, useState } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// const LazyLoadingImage = () => {
//     const [data, setData] = useState([]);
//     const [search,setSearch]=useState([])

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//           .then(response => response.json())
//           .then(a => setData(a)); 
//     }, []);

//     // const searchingData=()=>{
//     //   data.filter((item)=>(
//     //      item
//     //   ))
//     // }

//     const searchChange=(e)=>{
//         setSearch(e.target.value)
//     }
    
//   return (
//     <div>
//       <div>
//       <input  placeholder='search' className='px-10 py-2 bg-red-300 border-2 ml-20 text-2xl' onChange={searchChange}></input>
//       {/* <button className='bg-blue-300 px-3 py-2 rounded-lg text-2xl'>Enter</button> */}
//       </div>

//       <div className='mx-12 my-2'>
//       <button className='bg-green-300 px-3 py-2 rounded-lg text-2xl ' >Low to high</button>
//       </div>

//       <div className='mx-12 my-2'>
//       <button className='bg-yellow-300 px-3 py-2 rounded-lg text-2xl '>high to Low</button>
//       </div>


//       {data.map((item,index) => (
        
//        <div key={index} className='flex items-center justify-around px-5 py-12 border-2'>
//        <div>
//        <h1>Title: {item.title}</h1>
//        <p>Price: {item.price}</p>
//        </div>
//        <div><LazyLoadImage
//           key={item.id}
//           alt={item.title} 
//           height={200}
//           src={item.image} 
//           width={100}
//         /></div>
//        </div>
    
//       ))}
//     </div>
//   );
// };

// export default LazyLoadingImage;


















import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyLoadingImage = () => {
  const [data, setData] = useState([]);           // Fetched data from API
  const [search, setSearch] = useState("");         // Search input (as a string)
  const [sortOrder, setSortOrder] = useState(null); // 'asc' for low-to-high, 'desc' for high-to-low

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  // Update search state on input change
  const searchChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter products based on the search term (case-insensitive)
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // Sort the filtered data based on the selected sort order
  let sortedData = [...filteredData];
  if (sortOrder === 'asc') {
    sortedData.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    sortedData.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <div>
        <input 
          placeholder='Search'
          className='px-10 py-2 bg-red-300 border-2 ml-20 text-2xl'
          onChange={searchChange}
          value={search}
        />
      </div>

      <div className='mx-12 my-2'>
        <button 
          className='bg-green-300 px-3 py-2 rounded-lg text-2xl'
          onClick={() => setSortOrder('asc')}
        >
          Low to High
        </button>
      </div>

      <div className='mx-12 my-2'>
        <button 
          className='bg-yellow-300 px-3 py-2 rounded-lg text-2xl'
          onClick={() => setSortOrder('desc')}
        >
          High to Low
        </button>
      </div>

      {sortedData.map((item) => (
        <div key={item.id} className='flex items-center justify-around px-5 py-12 border-2'>
          <div>
            <h1>Title: {item.title}</h1>
            <p>Price: {item.price}</p>
          </div>
          <div>
            <LazyLoadImage
              alt={item.title} 
              height={200}
              src={item.image} 
              width={100}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LazyLoadingImage;
























































