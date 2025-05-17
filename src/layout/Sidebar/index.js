import React, { useState } from 'react';
import { adminSidebarData } from '../NavData';
import { Link } from "react-router-dom";
import logo from "../../Assets/png/Logo.png"
import logout from "../../Assets/png/Vector (1).png"

const Sidebar = () => {
    const [navData,setNavData] = useState(adminSidebarData);
      const [selectedItem, setSelectedItem] = useState(0);

      const handleClick = (id) => {
    setSelectedItem(id);

  };

    return (
        <div className="w-64 h-screen bg-white border-r shadow-md fixed left-1 top-0 p-4 flex flex-col"> 
        <div>
        <div className=' flex items-center text-l font-bold text-blue-600 mb-8'>
          <img src={logo} className='w-10 h-10 mr-2' />
            Rental Management
        </div>
        <nav className="space-y-4">
            {navData.map((item) =>(
             <Link 
             key={item.title}
             to={item.link}
             onClick={()=>{handleClick(item.id)}}
             className={`flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100
                                    ${selectedItem===item.id ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                >
                   <img src= {item.icon} alt={item.title} className={`w-5 h-5 object-contain ${selectedItem === item.id ? 'filter-blue' : ''}`} />
                    <span>{item.title}</span>
                </Link>
                
            ))}
        </nav>
        </div>

        <div className="mt-10 pt-4 border-t">
            <Link
          to="/"
          className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-100 text-gray-700"
        >
          <img src={logout} alt="Logout" className="w-5 h-5 object-contain" />
          <span>Log Out</span>
        </Link>
        </div>
        </div>
    )
}

export default Sidebar;



// SidebarComponent.jsx or .tsx

// import React from "react";
// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
// import { Link } from "react-router-dom";
// import { adminSidebarData } from "../NavData";

// const SidebarComponent = () => {
//   // const navigate = useNavigate();
//   // const location = useLocation();

//   return (
//     <div style={{ height: "100vh", display: "flex" }}>
//      <Sidebar backgroundColor="#f8f9fa" style={{ minWidth: "250px" }}>
//         <Menu>
//           {adminSidebarData.map((item) => (
//             <MenuItem key={item.id} icon={item.icon}>
//               <Link to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
//                 {item.title}
//               </Link>
//             </MenuItem>
//           ))}
//         </Menu>
//       </Sidebar>
//     </div>
//   );
// };

// export default SidebarComponent;
