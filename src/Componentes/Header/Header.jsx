import Navbar from "../Navbar/Navbar";

function Header() {
    return ( 
        <header className="flex bg-[#4A403D] text-white p-4 mb-4 justify-between">
            <span className="font-jost">CINE NIBO</span>
            
            <Navbar/>
        </header>
     );
}

export default Header;