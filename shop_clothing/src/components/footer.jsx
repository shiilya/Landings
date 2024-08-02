import "../components_style/footer_style.css"

function Footer() {
    return ( 
        <div className="footer__copyright">
			<div className="container footer__copyright-wrapper">
				<div className="footer__copy">
					&copy; 2021 Brand All Rights Reserved.
				</div>
				<nav className="footer__social">
					<ul className="footer__social-list">
						<li><a href="http://facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
						<li><a href="https://twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						<li><a href="https://ru-ru.facebook.com/LinkedIn/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
						</li>
						<li><a href="https://www.pinterest.ru/"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
						</li>
						<li><a href="https://plus.google.com/"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
						</li>
					</ul>
				</nav>
			</div>

		</div>
     );
}

export default Footer;