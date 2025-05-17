import Sidebar from "./Sidebar/index"
import Topbar from "./TopNavBar/index"

const MainLayout = ()=>{
    return (
            <div className="flex">
      <Sidebar />
            <div className="flex flex-col flex-1 ml-64">
      <Topbar />
      </div>
    
    </div>

    )
}


export default MainLayout;