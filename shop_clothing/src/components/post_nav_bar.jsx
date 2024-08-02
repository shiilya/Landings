import "../components_style/post_nav_bar_style.css"
import { Link } from "react-router-dom"

function PostNavBar() {
    return ( 
        <div className="crumbs">
		<div className="container crumbs__wrapper">
			<div className="crumbs__title">
				New Arrivals
			</div>
			<nav className="crumbs__path">
				<ul className="crumbs__list">
					<li className="crumbs__item"><Link to="/" className="crumbs__link">home</Link></li>
					<li className="crumbs__item"><a href="#" className="crumbs__link">men</a></li>
					<li className="crumbs__item crumbs__item-current">New Arrivals</li>
				</ul>
			</nav>
		</div>
	</div>
     );
}

export default PostNavBar;