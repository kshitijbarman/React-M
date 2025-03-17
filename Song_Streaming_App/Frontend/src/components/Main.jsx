// import React, {  useEffect } from 'react'
// import axios from 'axios';
// import { useState } from 'react';

// const Main = () => {
//     const [songData,setSongData]=useState([])
//     const [loading,setLoading]=useState(false)

//     const fetchData=async()=>{
//         try {
//             const res = await axios.get("https://saavn.me/modules?language=hindi");
//             setSongData(res.data.data); 
//             console.log(res.data.data);  
//             // setLoading(true)
            
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     }

//     useEffect(()=>{
//         fetchData()
//     },[])

//   return (
//     <div>
    
        
//     </div>
//   )
// }

// export default Main;















import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slidebar from './Slidebar';

const Main = () => {
    const [songData, setSongData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get("https://saavn.me/modules?language=hindi");
            console.log("Full API Response:", res.data);
            setSongData(res.data.data || res.data); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex'>
           <div className='hidden xl:block'> <Slidebar /></div>
           hello
        </div>
    );
};

export default Main;
