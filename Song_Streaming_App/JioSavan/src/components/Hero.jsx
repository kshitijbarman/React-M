// import React from 'react'
// import Slidebar from './Slidebar'
// import { useSelector } from 'react-redux'

// const Hero = () => {
//     const apiData=useSelector((state)=>state.apiData)
    
//   return (
//     <div className='flex pt-20'>
//        <div><Slidebar/></div>
//        <div>
//             {apiData.map((song,index)=>(
//               <div className={index}>

//               </div>
//             ))}
//        </div>
//     </div>
//   )
// }

// export default Hero









import React from "react";
import { useSelector } from "react-redux";
import Slidebar from "./Slidebar";

const Hero = ({ song }) => {
  const imageUrl = song.image?.find(img => img.quality === "150x150")?.url || "https://via.placeholder.com/150";

  return (
    <div className="max-w-md p-4 shadow-lg rounded-2xl bg-white">
      <img
        src={imageUrl}
        alt={song.name || "Unknown Song"}
        className="rounded-lg w-full h-auto"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{song.name || "Unknown Title"}</h2>
        <p className="text-sm text-gray-500">Album: {song.album?.name || "N/A"}</p>
        <p className="text-sm text-gray-500">Label: {song.label || "N/A"}</p>
        <p className="text-sm text-gray-500">Year: {song.year || "N/A"}</p>
        <p className="text-sm text-gray-500">Play Count: {song.playCount?.toLocaleString() || "0"}</p>
        <div className="flex gap-2 mt-2">
          {song.downloadUrl?.map((quality) => (
            <a
              key={quality.quality}
              href={quality.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm underline"
            >
              {quality.quality}
            </a>
          )) || <p className="text-sm text-gray-500">No download links available</p>}
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Play Song</button>
      </div>
    </div>
  );
};

export default function CartPage() {
  const apiData = useSelector((state) => state.apiData);
  const songData = apiData?.data?.results?.[0] || {};

  return (
    <div className="flex pt-20">
      <div><Slidebar /></div>
      <div className="flex justify-center items-center w-full bg-gray-100">
        <Hero song={songData} />
      </div>
    </div>
  );
}
