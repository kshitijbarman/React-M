// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import Slidebar from "./Slidebar";

// const Main = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentTrack, setCurrentTrack] = useState(null);
//   const audioRef = useRef(null);

//   // Fetch Bollywood songs from the API
//   useEffect(() => {
//     const fetchSongs = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const { data } = await axios.get(
//           "https://saavn.dev/api/search/songs?limit=40",
//           {
//             params: { query: "Bollywood" },
//           }
//         );
//         console.log(data.data);
//         setSearchResults(data.data.results || []);
//       } catch (err) {
//         setError("Failed to fetch songs");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSongs();
//   }, []);

//   // Play song when clicked
//   const playSong = (song) => {
//     const highestQuality =
//       song.downloadUrl?.find((file) => file.quality === "320kbps") ||
//       song.downloadUrl[0];

//     if (highestQuality) {
//       setCurrentTrack(highestQuality.url);
//       if (audioRef.current) {
//         audioRef.current.play();
//       }
//     }
//   };

//   return (
//     <div className="flex">
//       {" "}
//       <div className="hidden xl:block fixed">
//         {" "}
//         <Slidebar />
//       </div>
//       <div className="p-4  min-h-screen  pt-25 w-full  xl:ml-[16rem]">
//         <h2 className="text-2xl mb-4">Music Player 🎵</h2>

//         {loading && <p>Loading songs...</p>}
//         {error && <p className="text-red-500">{error}</p>}

//         <div className="overflow-x-auto">
//           <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {searchResults.map((song) => (
//               <li
//                 key={song.id}
//                 className="flex items-center space-x-4 cursor-pointer bg-white p-2 rounded-lg shadow-md"
//                 onClick={() => playSong(song)}
//               >
//                 <img
//                   src={song.image[2]?.url}
//                   alt={song.name}
//                   className="w-24 md:w-30 rounded"
//                 />
//                 <button
//                   onClick={() => playSong(song)}
//                   className="bg-green-500 rounded-4xl px-5 py-1 text-white"
//                 >
//                   Play
//                 </button>
//                 <span className="text-black">{song.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {currentTrack && (
//           <audio ref={audioRef} controls autoPlay className="mt-4 w-full  fixed bottom-0 right-0">
//             <source src={currentTrack} type="audio/mp4" />
//             Your browser does not support the audio element.
//           </audio>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Main;















import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Slidebar from "./Slidebar";
import UseDarkMode from "./UseDarkMode";

const Main = () => {
  const {toggle,prevalue} =UseDarkMode()

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioRef = useRef(null);

  // Fetch Bollywood songs from the API
  useEffect(() => {
    const fetchSongs = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data } = await axios.get(
          "https://saavn.dev/api/search/songs?limit=40",
          {
            params: { query: "Bollywood" },
          }
        );
        console.log(data.data);
        setSearchResults(data.data.results || []);
      } catch (err) {
        setError("Failed to fetch songs");
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  // Play song when clicked
  const playSong = (song) => {
    const highestQuality =
      song.downloadUrl?.find((file) => file.quality === "320kbps") ||
      song.downloadUrl[0];

    if (highestQuality) {
      setCurrentTrack(highestQuality.url);

      // Wait for state update, then play the new track
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load(); // Reload audio source
          audioRef.current.play(); // Start playing the new track
        }
      }, 100);
    }
  };

  return (
    <div className={`flex ${toggle ? 'bg-[#f5f5f5]' : 'bg-black text-white'}`}>
      <div className="hidden xl:block fixed">
        <Slidebar />
      </div>
      <div className="p-4 min-h-screen pt-25 w-full xl:ml-[16rem]">
        <h2 className="text-2xl mb-4">Music Player 🎵</h2>

        {loading && <p>Loading songs...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="overflow-x-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((song) => (
              <li
                key={song.id}
                className="flex items-center space-x-4 cursor-pointer bg-white p-2 rounded-lg shadow-md"
                onClick={() => playSong(song)}
              >
                <img
                  src={song.image[2]?.url}
                  alt={song.name}
                  className="w-24 md:w-30 rounded"
                />
                <button
                  onClick={() => playSong(song)}
                  className="bg-green-500 rounded-4xl px-5 py-1 text-white"
                >
                  Play
                </button>
                <span className="text-black">{song.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {currentTrack && (
          <audio ref={audioRef} controls autoPlay className="mt-4 w-full fixed bottom-0 right-0">
            <source src={currentTrack} type="audio/mp4" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

export default Main;

