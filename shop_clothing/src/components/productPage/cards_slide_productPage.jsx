import "../../components_style/productPage/cards_slide_productPage_style.css"

function CardsSlideProductPage() {
    return ( 
        <div className="items__btn">
						<nav className="page">
							<ul className="page__list">
								<li className="page__item">
									<a className="page__link" href="#"><i className="fa fa-chevron-left" aria-hidden="true"></i></a>
								</li>
								<li className="page__item"><a className="page__link page__link-active" href="#">1</a></li>
								<li className="page__item"><a className="page__link" href="#">2</a></li>
								<li className="page__item"><a className="page__link" href="#">3</a></li>
								<li className="page__item"><a className="page__link" href="#">4</a></li>
								<li className="page__item"><a className="page__link" href="#">5</a></li>
								<li className="page__item"><a className="page__link" href="#">6</a></li>
								<li className="page__item"><span className="page__link">&hellip;</span></li>
								<li className="page__item"><a className="page__link" href="#">20</a></li>
								<li className="page__item "><a className="page__link page__link-active" href="#"><i className="fa fa-chevron-right"
											aria-hidden="true"></i></a></li>
							</ul>
						</nav>
						<a href="javascript:void(0);" className="items__view">View All</a>
					</div>
     );
}

export default CardsSlideProductPage;