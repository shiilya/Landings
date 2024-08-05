import "../components_style/footer_style.css"

function Footer() {
    return ( 
        <footer className="contacts">
        <div className="container">
            <div className="contacts_title">
                <h2 className="title_1">Contacts</h2>
            </div>
            <div className="contacts_content">
                <p>Want to know more or just chat?<br/>You are welcome!</p>
            </div>
            <div className="button">
                <a href="#!" className="btn">Send massage</a>
            </div>
            <div className="social_contacts">
                <a target="_blank" href="https://vk.com/id127652015"><i className="fab fa-vk"></i></a>
                <a target="_blank" href="https://t.me/Ilya9009"><i className="fab fa-telegram"></i></a>
                <a target="_blank" href="mailto:shishmagaevi@mail.ru"><i className="fa fa-envelope"></i></a>
                <a target="_blank" href="https://github.com/shiilya"><i className="fab fa-github"></i></a>
            </div>
            <div className="social_contacts_like">
                <p>Like me on<br/>LinkedIn, Instagram, Behance, Dribble</p>
            </div>

        </div>
    </footer>
     );
}

export default Footer;