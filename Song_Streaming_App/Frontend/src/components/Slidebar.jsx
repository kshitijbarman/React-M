// import React from "react";
// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";


// const Slidebar = () => {
//   return (
//     <Sidebar >
//       <Menu className="pl-5 text-sm ">
//         <h2 className=" text-center py-2">BROWSER</h2>
//         <MenuItem> New Releases </MenuItem>
//         <MenuItem> Top Charts </MenuItem>
//         <MenuItem> Top Playlists </MenuItem>
//         <MenuItem> Podcasts </MenuItem>
//         <MenuItem> Top Artists </MenuItem>
//         <MenuItem> Radio </MenuItem>
//         <h2 className="py-2 text-center">Library</h2>
//         <MenuItem> History </MenuItem>
//         <MenuItem> Liked Songs </MenuItem>
//         <MenuItem>  Albums </MenuItem>
//         <MenuItem> Podcasts </MenuItem>
//         <MenuItem> Artists </MenuItem>
//       </Menu>
//     </Sidebar>
//   );
// };

// export default Slidebar;




























// import React from "react";
// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

// const Slidebar = () => {
//   return (
//     <Sidebar className="h-[80vh]   rounded-lg">
//       <Menu className="pl-5 text-sm">
//         <h2 className="text-center py-2 text-gray-700">BROWSER</h2>
//         <MenuItem> New Releases </MenuItem>
//         <MenuItem> Top Charts </MenuItem>
//         <MenuItem> Top Playlists </MenuItem>
//         <MenuItem> Podcasts </MenuItem>
//         <MenuItem> Top Artists </MenuItem>
//         <MenuItem> Radio </MenuItem>

//         <h2 className="py-2 text-center text-gray-700">LIBRARY</h2>
//         <MenuItem> History </MenuItem>
//         <MenuItem> Liked Songs </MenuItem>
//         <MenuItem> Albums </MenuItem>
//         <MenuItem> Podcasts </MenuItem>
//         <MenuItem> Artists </MenuItem>
//       </Menu>
//     </Sidebar>
//   );
// };

// export default Slidebar;




















import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const Slidebar = () => {
  return (
    <Sidebar className="h-[80vh] rounded-lg">
      <Menu className="pl-5 text-sm space-y-1"> {/* Reduced space using `space-y-1` */}
        <h2 className="text-center py-1 text-gray-800">BROWSER</h2>
        <MenuItem className="py-1"> New Releases </MenuItem>
        <MenuItem className="py-1"> Top Charts </MenuItem>
        <MenuItem className="py-1"> Top Playlists </MenuItem>
        <MenuItem className="py-1"> Podcasts </MenuItem>
        <MenuItem className="py-1"> Top Artists </MenuItem>
        <MenuItem className="py-1"> Radio </MenuItem>

        <h2 className="py-1 text-center text-gray-800">LIBRARY</h2>
        <MenuItem className="py-1"> History </MenuItem>
        <MenuItem className="py-1"> Liked Songs </MenuItem>
        <MenuItem className="py-1"> Albums </MenuItem>
        <MenuItem className="py-1"> Podcasts </MenuItem>
        <MenuItem className="py-1"> Artists </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Slidebar;
