import "../../components_style/mainPage/offer_mainPage_style.css"

function Offer() {
    return ( 
        <section className="offer">
		<div className="container offer__wrapper">
			<div className="offer__col1">
				<div className="offer__item offer__item-offer1">
					<a className="offer__item-link" href="#!"></a>
					<div className="offer__title offer__title-men">
						<p className="offer__suptitle offer__suptitle-men">hot deal</p>
						<p className="offer__subtitle offer__subtitle-men">for men</p>
					</div>
				</div>
				<div className="offer__item offer__item-offer2">
					<a className="offer__item-link" href="#!"></a>
					<div className="offer__title offer__title-trend">
						<p className="offer__suptitle offer__suptitle-trend">LUXIROUS & trendy</p>
						<p className="offer__subtitle offer__subtitle-trend">ACCESORIES</p>
					</div>
				</div>
			</div>
			<div className="offer__col2">
				<div className="offer__item offer__item-offer3">
					<a className="offer__item-link" href="#!"></a>
					<div className="offer__title offer__title-women">
						<p className="offer__suptitle offer__suptitle-women">30% offer</p>
						<p className="offer__subtitle offer__subtitle-women">women</p>
					</div>
				</div>
				<div className="offer__item offer__item-offer4">
					<a className="offer__item-link" href="#!"></a>
					<div className="offer__title offer__title-kids">
						<p className="offer__suptitle offer__suptitle-kids">new arrivals</p>
						<p className="offer__subtitle offer__subtitle-kids">FOR kids</p>
					</div>
				</div>
			</div>
		</div>
	</section>
     );
}

export default Offer;