import { AiFillHome, AiFillSafetyCertificate, AiFillLock, AiFillMacCommand } from "react-icons/ai";

function NavBar() {
    return ( 
        <div className="contNavBar">
            <div className="navBody">
                <div className="icon">
                    <AiFillHome className="iconBtn"/>
                </div>
                <div className="icon">
                    <AiFillSafetyCertificate className="iconBtn"/>
                </div>
                <div className="icon">
                    <AiFillLock className="iconBtn"/>
                </div>
                <div className="icon">
                    <AiFillMacCommand className="iconBtn"/>
                </div>
            </div>
        </div>
     );
}

export default NavBar;