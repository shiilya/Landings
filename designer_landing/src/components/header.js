import "../components_style/header_style.css"

function Header() {
    return ( 
        <div className="header_nav">
        <a href="#!" className="logo">John</a>
        <nav id="nav" className="nav">
            <ul className="nav_list">
                <li className="nav_item"><a href="#!" className="nav_link active">Home</a></li>
                <li className="nav_item"><a href="#!" className="nav_link">Works</a></li>
                <li className="nav_item"><a href="#!" className="nav_link">Services</a></li>
                <li className="nav_item"><a href="#!" className="nav_link">About</a></li>
                <li className="nav_item"><a href="#!" className="nav_link">Contact</a></li>
            </ul>
            <button id="nav_btn" className="nav_button">
                <img id="nav_btn_img" src="./img/NAV.svg" alt="nav button"/>
            </button>
        </nav>
    </div>
     );
}

export default Header;