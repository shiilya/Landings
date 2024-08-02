import "../components_style/subscribe_style.css"

function Subscribe() {
    return ( 
        <section className="subscribe">
		<div className="container">
			<div className="subscribe__wrapper">
				<div className="subscribe__box">
					<div className="subscribe__feedback">
						<div className="subscribe__feedback-photo">
							<img src="img/photo.png" alt="photo"/>
						</div>
						<div className="subscribe__feedback-text">
							<p>“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
								a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
							<div className="subscribe__feedback-name">Bin Burhan</div>
							<p className="subscribe__feedback-prof">Dhaka, Bd</p>
						</div>
					</div>
					<div className="pagination">
						<a href="javascript:void(0);" className="pagination__line"></a>
						<a href="javascript:void(0);" className="pagination__line pagination__line-active"></a>
						<a href="javascript:void(0);" className="pagination__line"></a>
					</div>
				</div>

				<div className="subscribe__block">
					<p className="subscribe__block-title">Subscribe</p>
					<p className="subscribe__block-subtitle">FOR OUR NEWLETTER AND PROMOTION</p>
					<form className="subscribe__block-form" action="#">
						<input className="subscribe__block-input" type="email" placeholder="Enter Your Email"/>
						<button className="subscribe__block-btn" type="submit">Subscribe</button>
					</form>
				</div>
			</div>
		</div>
	</section>
     );
}

export default Subscribe;