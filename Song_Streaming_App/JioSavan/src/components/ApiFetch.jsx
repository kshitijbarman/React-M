import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch,useSelector} from 'react-redux'
import { addData } from '../redux/slice/apiDataSlice'

const ApiFetch = () => {
    
    const [error,setError]=useState('')
    const dispatch =useDispatch()
    // const apiData=useSelector((state)=>state.apiData)

    
    const fetchData=async()=>{
    try {
        const { data } = await axios.get(
          "https://saavn.dev/api/search/songs?limit=40",
          { params: { query:"Bollywood" } }
        );
        dispatch(addData(data.data.results))
        
      } catch (err) {
        setError("Failed to fetch songs");
      }
    

    }
    useEffect(()=>{
        fetchData()
    },[])
    

  return (
    <div>
    </div>
);

}

export default ApiFetch

















// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { addData } from "../slice/apiDataSlice";  // Import Redux action

// const ApiFetch = () => {
//     const [error, setError] = useState("");
//     const dispatch = useDispatch();
//     const apiData = useSelector((state) => state.apiData); // Get data from Redux

//     const fetchData = async () => {
//         try {
//             const { data } = await axios.get("https://saavn.dev/api/search/songs", {
//                 params: { query: "Bollywood", limit: 40 }
//             });

//             console.log("Fetched Data:", data.data.results);
//             dispatch(addData(data.data.results || []));  // ✅ Correct dispatch
//         } catch (err) {
//             setError("Failed to fetch songs");
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h2>Fetched Songs</h2>
//             {error && <p style={{ color: "red" }}>{error}</p>}
//             <ul>
//                 {apiData.length > 0 ? (
//                     apiData.map((song, index) => <li key={index}>{song.name}</li>)
//                 ) : (
//                     <p>Loading songs...</p>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default ApiFetch;
