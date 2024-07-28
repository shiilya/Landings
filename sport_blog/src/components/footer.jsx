import "../components_style/footer.css"

function Footer() {
    return ( 
        <footer>
        <div className="footer_main-wrapper">
            <a href="#">
            <img className="logo" src="img/logo.png"/>
            </a>
            <div className="social">
                <a target="_blank" href="https://vk.com/id127652015"><i className="fab fa-vk"></i></a>
                <a target="_blank" href="https://t.me/Ilya9009"><i className="fab fa-telegram"></i></a>
                <a target="_blank" href="mailto:shishmagaevi@mail.ru"><i className="fa fa-envelope"></i></a>
                <a target="_blank" href="https://github.com/sjdid1"><i className="fab fa-github"></i></a>
            </div>
            <p>Shishma 2024</p>
        </div>
    </footer>
     );
}

export default Footer;