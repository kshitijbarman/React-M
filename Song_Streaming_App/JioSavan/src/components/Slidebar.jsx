import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";


const Slidebar = () => {
 
  return (
    <Sidebar className='hidden h-[80vh] rounded-lg xl:block  h'>
      <Menu className={`pl-5 text-sm space-y-1 `}>
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
