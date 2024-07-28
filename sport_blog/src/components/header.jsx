import "../components_style/header.css";

function Header() {
  return (
    <div className="header paddings">
      <div className="header_main_wrapper">
        <a href='#' className="logo_link"><img className="logo" src="./img/logo.png" /></a>
        
        <nav className="main-menu">
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#services-link">Services</a>
            </li>
            <li>
              <a href="#works-link">How It Works</a>
            </li>
            <li>
              <a href="#team-link">Team</a>
            </li>
            <li>
              <a href="#our-blog-link">Our Blog</a>
            </li>
            <li>
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
