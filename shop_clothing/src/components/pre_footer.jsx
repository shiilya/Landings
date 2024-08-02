import "../components_style/pre_footer_style.css"

function PreFooter() {
    return ( 
        <footer className="footer">
		<div className="container">
			<div className="footer__wrapper">
				<div className="footer__logo">
					<a className="logo__link" href="index.html">
						<img className="logo__image" src="img/logo.png" alt="logo"/>
						<p>BRAN<span>D</span></p>
					</a>
					<div className="footer__info">
						Objectively transition extensive data rather than cross functional solutions. Monotonectally
						syndicate
						multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array
						of processes
						and cross-unit partnerships.
						<br/><br/>
						Efficiently plagiarize 24/365 action items and focused infomediaries.
						Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.

					</div>
				</div>
				<nav className="footer__nav">
					<div className="footer__company">
						<p className="footer__title">COMPANY</p>
						<ul className="footer__list">
							<li><a href="index.html">Home</a></li>
							<li><a href="javascript:void(0);">Shop</a></li>
							<li><a href="javascript:void(0);">About</a></li>
							<li><a href="javascript:void(0);">How It Works</a></li>
							<li><a href="javascript:void(0);">Contact</a></li>
						</ul>
					</div>
					<div className="footer__information">
						<p className="footer__title">INFORMATION</p>
						<ul className="footer__list">
							<li><a href="javascript:void(0);">Tearms & Condition</a></li>
							<li><a href="javascript:void(0);">Privacy Policy</a></li>
							<li><a href="javascript:void(0);">How to Buy</a></li>
							<li><a href="javascript:void(0);">How to Sell</a></li>
							<li><a href="javascript:void(0);">Promotion</a></li>
						</ul>
					</div>
					<div className="footer__category">
						<p className="footer__title">SHOP CATEGORY</p>
						<ul className="footer__list">
							<li><a href="javascript:void(0);">Men</a></li>
							<li><a href="javascript:void(0);">Women</a></li>
							<li><a href="javascript:void(0);">Child</a></li>
							<li><a href="javascript:void(0);">Apparel</a></li>
							<li><a href="javascript:void(0);">Brows All</a></li>
						</ul>
					</div>
				</nav>
			</div>
		</div>

		
	</footer>
     );
}

export default PreFooter;